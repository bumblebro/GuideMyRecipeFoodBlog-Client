"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import localFont from "next/font/local";
import { useEffect, useState } from "react";
import DeSlugify from "@/libs/DeSlugify";
import { slugify } from "markdown-to-jsx";
import { subSections } from "@/libs/Section";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { Pacifico } from "next/font/google";
import { Nunito_Sans } from "next/font/google";
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

const Poppins500 = Poppins({
  weight: "500",
  subsets: ["latin"],
  // display: "swap",
});

// Pacifico
// Homemade_Apple
const Nunito = Nunito_Sans({
  weight: "800",
  subsets: ["latin"],
  // display: "swap",
});
// Pacifico
// Homemade_Apple
const font = Pacifico({
  weight: "400",
  subsets: ["latin"],
  // display: "swap",
});
const freight = localFont({
  src: "../../app/fonts/freight-neo-pro-book.otf",
});

const freightbig = localFont({
  src: "../../app/fonts/Freight Big Pro Medium Italic.otf",
});

const freightlight = localFont({
  src: "../../app/fonts/fonnts.com-FreightNeo_Pro_Light.otf",
});

const freightbigstraight = localFont({
  src: "../../app/fonts/Freight Big Pro Medium.otf",
});

const CuisineTypes = [
  "Italian",
  "Mexican",
  "Asian",
  "Mediterranean",
  "American",
  "Indian",
  "French",
  "Japanese",
  "Greek",
  "Spanish",
];

const MealTypes = [
  "Breakfast",
  "Lunch",
  "Dinner",
  "Snacks",
  "Desserts",
  "Brunch",
];

const DietaryPreferences = [
  "Vegetarian",
  "Vegan",
  "Gluten-Free",
  "Keto",
  "Paleo",
  "Low-Carb",
  "Dairy-Free",
];

const CookingTechniques = [
  "Baking",
  "Grilling",
  "Roasting",
  "Sautéing",
  "Boiling",
  "Steaming",
  "Frying",
  "Smoking",
];
const Ingredients = [
  "Fruits",
  "Vegetables",
  "Proteins",
  "Grains",
  "Spices-and-Herbs",
];

const RecipeFormats = [
  "Quick-Meals",
  "Slow-Cooker",
  "Instant-Pot",
  "Batch-Cooking",
  "No-Cook",
  "One-Bowl-Meals",
  "Kid-Friendly",
];

const ModernTrends = [
  "Plant-Based",
  "Fusion-Cuisine",
  "Healthy-Swaps",
  "Fermented-Foods",
  "Zero-Waste-Cooking",
];

const SeasonalRecipes = ["Spring", "Summer", "Fall", "Winter", "Holiday"];

const GlobalFlavors = [
  "Middle-Eastern",
  "South-American",
  "African",
  "Caribbean",
  "Nordic",
];

const SpecialOccasions = [
  "Birthday",
  "Anniversary",
  "Picnic",
  "Potluck",
  "Game-Day",
];

const navigation = [
  { name: "Home", href: "/", id: "null" },
  { name: "About", href: "/about", id: "null" },
  // { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Browse Recipes", href: "/recipes", id: "null" },
  // { name: "Search", id: "search-toggle" },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

function Navbar3({
  decodedslug,
  home,
  ispost,
}: {
  decodedslug?: any;
  home?: boolean;
  ispost?: boolean;
}) {
  const [categoryList, setCategoryList] = useState<string[]>([]);
  const [lastElement, setLastElement] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  useEffect(() => {
    // console.log(`SLUGGGGG`, decodedslug);
    setLastElement(false);

    if (decodedslug?.length == 3) {
      setLastElement(true);
      // setLen(decodedslug.length);
    } else setLastElement(false);

    if (home == true) {
      setCategoryList(decodedslug);
      return;
    }

    if (Array.isArray(decodedslug) && decodedslug.length > 0) {
      const input = decodedslug[decodedslug.length - 1]?.trim().toLowerCase();
      for (const [category, subCategory] of Object.entries(subSections)) {
        if (input === category.toLowerCase()) {
          setCategoryList(Object.keys(subCategory));
        }

        // Check if the input matches a sub-category
        for (const [subCategoryKey, items] of Object.entries(subCategory)) {
          if (input === subCategoryKey.toLowerCase()) {
            setCategoryList(items);
          }
        }

        if (categoryList.length == 0) {
          // setLastElement(true);

          for (const [subCategoryKey, items] of Object.entries(subCategory)) {
            if (
              decodedslug[decodedslug.length - 2]?.trim().toLowerCase() ===
              subCategoryKey.toLowerCase()
            ) {
              setCategoryList(items);
            }
          }

          // decodedslug.pop();
        }
      }
    }
    // console.log(`lastElement`, lastElement);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery("");
    }
  };

  return (
    <Disclosure as="nav" className="bg-[#F4F2F2]">
      {({ open }) => (
        <>
          <div className="w-full mx-auto max-w-7xl px-5 sm:px-4 lg:px-4 xl:px-14 py-0">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center  sm:items-stretch justify-start">
                <div className="flex shrink-0 items-center">
                  <Link href="/">
                    <h1
                      className={`  tracking-[4px] text-xl   lg:text-[1.7rem] xl:text-[1.7rem] text-center text-[#000000] ${font.className}`}
                    >
                      GuideMyRecipe
                    </h1>
                    {/* <Image
                      src={logo}
                      alt="GuideMyRecipe logo"
                      width={100}
                      height={100}
                    ></Image> */}
                    {/* <img src={logo} alt="" />{" "} */}
                  </Link>
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* <button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="size-6" />
            </button> */}

                <div
                  className={` flex items-center sm:hidden ${Poppins700.className}`}
                >
                  {" "}
                  <a
                    // as="a"
                    href={"/recipes"}
                    // aria-current={item.current ? "page" : undefined}
                    className={classNames(
                      "hover:bg-black text-white bg-[#8D6271] transition-all duration-400",
                      `block rounded-md px-3 py-2 text-sm font-medium `
                    )}
                  >
                    Browse Recipes
                  </a>
                  {/* Mobile menu button*/}
                  <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 ">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>

                    {open ? (
                      <XMarkIcon className="block size-6 " aria-hidden="true" />
                    ) : (
                      <Bars3Icon
                        className="block size-6  "
                        aria-hidden="true"
                      />
                    )}
                  </DisclosureButton>
                </div>
                <div className="hidden  sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        id={item.id}
                        key={item.name}
                        href={item.href}
                        // aria-current={item.current ? "page" : undefined}
                        className={classNames(
                          "text-black hover:bg-[#8D6271] hover:text-white",
                          "rounded-md px-3 py-2 text-lg  font-bold uppercase tracking-widest"
                        )}
                      >
                        {item.name}
                      </a>
                    ))}{" "}
                    <button
                      onClick={() => setIsSearchOpen(true)}
                      className={classNames(
                        "text-black hover:bg-[#8D6271] hover:text-white",
                        "rounded-md px-3 py-2 text-lg  font-bold uppercase tracking-widest"
                      )}
                      id="search-toggle"
                      aria-label="Search"
                    >
                      SEARCH
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`flex justify-center w-[90%] mx-auto ${Poppins500.className}`}
          >
            <div className="overflow-scroll  no-scrollbar w-full xl:max-w-[73rem] text-white text-xs tracking-widest font-extrabold py-2 pt-2">
              <ul className="flex items-center text-xs gap-2  text-nowrap justify-evenly  sm:justify-center text-[#000000] uppercase font-light">
                {home == true
                  ? categoryList.map((item, i) =>
                      i === 0 ? (
                        <li key={i}>
                          <Link
                            className="hover:underline "
                            key={i}
                            href={`/${DeSlugify(item.toLowerCase())}`}
                          >
                            {DeSlugify(item)}
                          </Link>
                        </li>
                      ) : (
                        <>
                          {" "}
                          <li key={i}>
                            <h1>|</h1>
                          </li>
                          <li key={i}>
                            <Link
                              className=" hover:underline"
                              key={i}
                              href={`/${slugify(item.toLowerCase())}`}
                            >
                              {DeSlugify(item)}
                            </Link>
                          </li>
                        </>
                      )
                    )
                  : ispost == true
                  ? categoryList.map((item, i) => {
                      const url = `/${decodedslug.slice(0, 2).join("/")}`;
                      return i === 0 ? (
                        <li key={i}>
                          <Link
                            className="hover:underline "
                            key={i}
                            href={`${url}/${slugify(item.toLowerCase())}`}
                          >
                            {DeSlugify(item)}
                          </Link>
                        </li>
                      ) : (
                        <>
                          <li key={i}>
                            <h1>|</h1>
                          </li>
                          <li key={i}>
                            <Link
                              className="hover:underline "
                              key={i}
                              href={`${url}/${slugify(item.toLowerCase())}`}
                            >
                              {DeSlugify(item)}
                            </Link>
                          </li>
                        </>
                      );
                    })
                  : categoryList.map((item, i) => {
                      // const url = `/${decodedslug.join("/")}`;
                      return (
                        // <Link
                        //   className=" "
                        //   key={i}
                        //   href={`${url}/${item.toLowerCase()}`}
                        // >
                        //   {DeSlugify(item)}
                        // </Link>

                        i === 0 ? (
                          <li key={i}>
                            {" "}
                            <Link
                              className=" hover:underline"
                              key={i}
                              href={
                                lastElement == true
                                  ? `${slugify(item.toLowerCase())}`
                                  : `
                  ${decodedslug[decodedslug.length - 1]}/${slugify(
                                      item.toLowerCase()
                                    )}`
                              }
                            >
                              {DeSlugify(item)}
                            </Link>
                          </li>
                        ) : (
                          <>
                            {" "}
                            <li key={i}>
                              <h1>|</h1>
                            </li>{" "}
                            <li>
                              <Link
                                className="hover:underline "
                                key={i}
                                href={
                                  lastElement == true
                                    ? `${slugify(item.toLowerCase())}`
                                    : `
                    ${decodedslug[decodedslug.length - 1]}/${slugify(
                                        item.toLowerCase()
                                      )}`
                                }
                              >
                                {DeSlugify(item)}
                              </Link>
                            </li>
                          </>
                        )
                      );
                    })}

                {/* <h1>TRAILBLAZERS</h1>
            <h1>Tech</h1>
            <h1>Watches</h1>
            <h1>Cars</h1>
            <h1>Drinks</h1>
            <h1>Entertainment</h1> */}
              </ul>
            </div>
          </div>
          <DisclosurePanel className={`sm:hidden ${Poppins700.className}`}>
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <DisclosureButton
                  id={item.id}
                  key={item.name}
                  as="a"
                  href={item.href}
                  // aria-current={item.current ? "page" : undefined}
                  className={classNames(
                    "text-black hover:bg-[#8D6271] hover:text-white",
                    `block rounded-md px-3 py-2 text-sm font-medium uppercase tracking-widest`
                  )}
                >
                  {item.name}
                </DisclosureButton>
              ))}{" "}
              <DisclosureButton
                as="button"
                onClick={() => setIsSearchOpen(true)}
                className={classNames(
                  "text-black hover:bg-[#8D6271] hover:text-white w-full text-left",
                  `block rounded-md px-3 py-2 text-sm font-medium uppercase tracking-widest`
                )}
                aria-label="Search"
              >
                Search
              </DisclosureButton>
            </div>
          </DisclosurePanel>

          {/* Search Modal */}
          {isSearchOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-20">
              <div className="bg-white rounded-lg p-6 w-full max-w-2xl mx-4">
                <div className="flex justify-between items-center mb-4">
                  <h2
                    className={`text-2xl font-semibold ${freightbig.className}`}
                  >
                    Search Recipes
                  </h2>
                  <button
                    onClick={() => setIsSearchOpen(false)}
                    className="text-gray-500 hover:text-gray-700"
                    aria-label="Close search"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <form onSubmit={handleSearch} className="flex gap-2">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for recipes..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8D6271] focus:border-transparent"
                  />
                  <button
                    type="submit"
                    className="px-6 py-2 bg-[#8D6271] text-white rounded-lg hover:bg-[#7a5260] transition-colors"
                  >
                    Search
                  </button>
                </form>
              </div>
            </div>
          )}
        </>
      )}
    </Disclosure>
  );
}

export default Navbar3;
