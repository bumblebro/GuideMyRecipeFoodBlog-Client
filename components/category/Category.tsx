import Link from "next/link";
import { useEffect, useState } from "react";
import { subSections } from "../../libs/Section";
import DeSlugify from "@/libs/DeSlugify";
import localFont from "next/font/local";

import { Poppins } from "next/font/google";
// Poppins
const Poppins700 = Poppins({
  weight: "700",
  subsets: ["latin"],
  // display: "swap",
});

const Poppins400 = Poppins({
  weight: "400",
  subsets: ["latin"],
  // display: "swap",
});
const freight = localFont({
  src: "../../app/fonts/freight-neo-pro-book.otf",
});

const freightlight = localFont({
  src: "../../app/fonts/fonnts.com-FreightNeo_Pro_Light.otf",
});

const freightbig = localFont({
  src: "../../app/fonts/Freight Big Pro Medium Italic.otf",
});

const freightbigstraight = localFont({
  src: "../../app/fonts/Freight Big Pro Medium.otf",
});
interface Category {
  decodedslug: string[];
  totalBlogs: number;
}

function Category({ decodedslug, totalBlogs }: Category) {
  let categoryList: string[] = [];

  const input = decodedslug[decodedslug.length - 1]?.trim().toLowerCase();

  for (const [category, subCategory] of Object.entries(subSections)) {
    if (input === category.toLowerCase()) {
      categoryList = Object.keys(subCategory);
    }

    // Check if the input matches a sub-category
    for (const [subCategoryKey, items] of Object.entries(subCategory)) {
      if (input === subCategoryKey.toLowerCase()) {
        categoryList = items;
      }
    }
  }

  return (
    <div
      className={` text-center flex flex-col items-center gap-4 px-4 pb-3 mt-[10px] md:mt-[10px] ${Poppins400.className}`}
    >
      <nav
        className="flex tracking-wider justify-start w-full xl:max-w-[73rem]"
        aria-label="Breadcrumb"
      >
        <ul className="flex items-center text-xs md:text-[14px] ">
          <li className="inline-flex items-center">
            <Link
              className="inline-flex items-center  font-medium text-gray-500 hover:underline"
              href="/"
            >
              {" "}
              Home
            </Link>
          </li>
          {decodedslug.map((item, i) => {
            const url = `/${decodedslug.slice(0, i + 1).join("/")}`;

            return (
              <li key={i} className="flex items-center ">
                <svg
                  className="rtl:rotate-180 w-2 h-2 text-black mx-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <Link
                  href={url.toLowerCase()}
                  className="inline-flex capitalize items-center font-medium
                  text-gray-500 hover:underline "
                >
                  {DeSlugify(item)}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <h1
        className={`text-2xl font-semibold border-b border-black pb-4 capitalize sm:text-[25px] md:text-[30px] ${Poppins700.className}`}
      >
        {DeSlugify(decodedslug[decodedslug.length - 1])}
      </h1>
      <p className="text-sm text-gray-800  md:w-[70%] xl:w-[60%] 2xl:w-[50%]">
        {`The latest news and reviews of everything ${
          DeSlugify(decodedslug[decodedslug.length - 1][0].toUpperCase()) +
          DeSlugify(decodedslug[decodedslug.length - 1].slice(1))
        }${categoryList?.map((item, i) => {
          if (i == 0) {
            return DeSlugify(`: ${item}`);
          }
          return DeSlugify(` ${item}`);
        })} and More`}
      </p>
      {decodedslug.length < 3 && (
        <div className="overflow-scroll  no-scrollbar w-full xl:max-w-[73rem] ">
          <ul className="flex items-center text-xs  pt-8  justify-around gap-10 px-10 md:justify-center ">
            {categoryList.map((item, i) => (
              <Link
                className="hover:underline"
                key={i}
                href={`${
                  decodedslug[decodedslug.length - 1]
                }/${item.toLowerCase()}`}
              >
                {DeSlugify(item)}
              </Link>
            ))}
          </ul>
        </div>
      )}
      <h1 className="text-sm font-semibold tracking-wider  pt-8  capitalize ">
        {totalBlogs} {DeSlugify(decodedslug[decodedslug.length - 1])} Recipes
        Published
      </h1>
    </div>
  );
}

export default Category;
