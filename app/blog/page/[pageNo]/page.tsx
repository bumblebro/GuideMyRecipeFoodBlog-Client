import GETBLOG from "@/app/api/blogs/GETBLOG";
import BlogList from "@/components/bloglist/BlogList";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import Paginationblog from "@/components/pagination/Paginationblog";
import Sidebar from "@/components/sidebar/Sidebar";
import { FoodBlogs } from "@prisma/client";
import { Metadata } from "next";
import { stringify } from "querystring";
import { useEffect, useState } from "react";
import localFont from "next/font/local";
import Navbar3 from "@/components/navbar3/page";

import { Poppins } from "next/font/google";
// Poppins
const Poppins700 = Poppins({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

const Poppins400 = Poppins({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const freight = localFont({
  src: "../../../../app/fonts/freight-neo-pro-book.otf",
});

interface params {
  params: {
    pageNo: Number;
  };
}

// const slugs = [
//   "Cuisine Types",
//   "Meal Types",
//   "Dietary Preferences",
//   "Cooking Techniques",
//   "Ingredients",
//   "Drinks",
//   "Special Occasions",
//   "Recipe Formats",
//   "Cooking Tips",
//   "Food Culture",
// ];

const slugs = [
  "Cuisine-Types",
  "Meal-Types",
  "Dietary-Preferences",
  "Cooking-Techniques",
  "Ingredients",
  "Recipe-Formats",
  "Modern-Trends",
  "Seasonal-Recipes",
  "Global-Flavors",
  "Special-Occasions",
];

export const revalidate = 86400;

export async function generateStaticParams() {
  const response = await GETBLOG({ pageNo: "1" });
  const totalpage = response.metaData.totalPages;
  const arr = [];
  for (let i = 1; i <= totalpage; i++) {
    arr.push({
      slug: ["page", i],
    });
  }
  // console.log(`blogpageslug`, arr.length);
  return arr;
}

export async function generateMetadata({ params }: params): Promise<Metadata> {
  return {
    metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_API_URL}`),
    title: `Blog - Page ${params.pageNo}`,
    description:
      "Enjoy access to the complete archive of GuideMyRecipe's articles—every post and every page we've ever published, all dedicated to food and drink.",
    alternates: {
      canonical: `/blog/page/${params.pageNo}`,
    },
  };
}

async function BlogPage({ params }: params) {
  let sidebar = false;
  let posts: FoodBlogs[] = [];
  // const [pageNo, setPageNo] = useState("1");
  let totalPages = 1;
  let hasNextPage = false;
  let totalBlogs = 0;

  if (params.pageNo) {
    // const res = await fetch(
    //   `${
    //     process.env.NEXT_PUBLIC_BASE_API_URL
    //   }/api/blogs?pageNo=${params.pageNo.toString()}`,
    //   {
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   }
    // );
    // const response = await res.json();
    const response = await GETBLOG({ pageNo: params.pageNo.toString() });

    if (response) {
      posts = response.blogs;
      // setPageNo(pageNumber);
      totalPages = response.metaData.totalPages;
      hasNextPage = response.metaData.hasNextPage;
      totalBlogs = response.metaData.totalBlogs;
    }
  } else {
    // const res = await fetch(
    //   `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/blogs?pageNo=${"1"}`,
    //   {
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   }
    // );
    // const response = await res.json();
    const response = await GETBLOG({ pageNo: "1" });

    if (response) {
      posts = response.blogs;
      // setPageNo(pageNumber);
      totalPages = response.metaData.totalPages;
      hasNextPage = response.metaData.hasNextPage;
      totalBlogs = response.metaData.totalBlogs;
    }
  }

  return (
    <>
      {/* <Navbar decodedslug={slugs} home={true} /> */}
      <Navbar3 decodedslug={slugs} ispost={true} />
      <div className={`mt-10 lg:mt-13 ${Poppins400.className}`}>
        <h1
          className={`text-center  text-2xl font-semibold tracking-wider pb-4 ${Poppins700.className}`}
        >
          The Latest Recipes - Page {params.pageNo.toString()}
        </h1>
        <h1 className="text-center  text-sm font-semibold tracking-wider">
          {totalBlogs} Latest Recipes Published
        </h1>
        <BlogList posts={posts || []} />
        <Paginationblog
          pageNo={params.pageNo.toString()}
          totalPages={totalPages}
          hasNextPage={hasNextPage}
        />
      </div>
    </>
  );
}

export default BlogPage;
