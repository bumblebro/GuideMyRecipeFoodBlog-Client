"use client";

import localFont from "next/font/local";
import Link from "next/link";
import { useEffect, useState } from "react";
import Footer from "../footer/Footer";
import DeSlugify from "@/libs/DeSlugify";
import { subSections } from "@/libs/Section";
import { slugify } from "markdown-to-jsx";

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

// const CuisineTypes = [
//   "Italian",
//   "Mexican",
//   "Asian",
//   "Mediterranean",
//   "American",
// ];

// const MealTypes = ["Breakfast", "Lunch", "Dinner", "Snacks", "Desserts"];

// const DietaryPreferences = [
//   "Vegetarian",
//   "Vegan",
//   "Gluten-Free",
//   "Keto",
//   "Paleo",
// ];

// const CookingTechniques = [
//   "Baking",
//   "Grilling",
//   "Roasting",
//   "Sauteing",
//   "Boiling",
// ];

// const Ingredients = [
//   "Fruits",
//   "Vegetables",
//   "Proteins",
//   "Grains",
//   "Spices-and-Herbs",
// ];

// const Drinks = ["Non-Alcoholic", "Cocktails", "Wine", "Beer", "Coffee-and-Tea"];

// const SpecialOccasions = [
//   "Holidays",
//   "Parties",
//   "Weekends",
//   "Healthy-Eating",
//   "Festivals",
// ];

// const RecipeFormats = [
//   "Quick-Meals",
//   "Slow-Cooker",
//   "Instant-Pot",
//   "Batch-Cooking",
//   "No-Cook",
// ];

// const CookingTips = [
//   "Meal-Prepping",
//   "Flavor-Enhancement",
//   "Kitchen-Skills",
//   "Health-Tips",
//   "Sustainable-Cooking",
// ];

// const FoodCulture = [
//   "Food-History",
//   "Culinary-Regions",
//   "Food-Photography",
//   "Culinary-Techniques",
//   "Food-Pairings",
// ];

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

function Navbar2({
  decodedslug,
  home,
  ispost,
}: {
  decodedslug?: any;
  home?: boolean;
  ispost?: boolean;
}) {
  const [sidebar, setSideBar] = useState(false);
  const [categoryList, setCategoryList] = useState<string[]>([]);
  const [lastElement, setLastElement] = useState(false);

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

  const handleSidebar = () => {
    setSideBar(false);
  };

  return (
    <nav
      className={` w-full z-20 top-0 start-0 fixed bg-[#F0F1F3] h-[72px] md:h-[80px] text-[#000000] ${freight.className}`}
    >
      <div className="  items-center justify-between mx-auto  py-2 md:py-3 ">
        <div className="bg-[#F0F1F3] flex flex-row justify-between  xl:px-0 xl:max-w-[73rem] mx-auto  my-auto h-full text-white w-full ">
          {" "}
          <div className="flex justify-center items-center">
            <Link href="/" onClick={handleSidebar}>
              <h1
                className={`uppercase font-[650] tracking-[4px] text-3xl   lg:text-[1.7rem] xl:text-[1.7rem] text-center text-[#000000] ${freightbig.className}`}
              >
                GuideMyRecipe
              </h1>
            </Link>
          </div>
          <div className="flex items-center gap-2 ">
            {/* <button type="submit" title="Button"> */}
            {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#000000"
                  className={`w-8 transform-gpu  duration-500 ${
                    sidebar ? "rotate-180  " : "rotate-0 "
                  }`}
                  onClick={() => {
                    setSideBar((prev: boolean) => !prev);
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg> */}
            <a href="/ " className="text-black">
              Home
            </a>{" "}
            <a href="/about " className="text-black">
              About
            </a>
            <a href="/recipes " className="text-black">
              Recipes
            </a>
            {/* </button> */}
            {/* <svg
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
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg> */}
          </div>
          {/* <div className="flex justify-end items-center">
            <h1 className="bg-[#0c50e6] w-fit   uppercase tracking-wider text-xs font-semibold py-1 px-1 rounded-full md:text-base md:px-4 md:py-0 2xl:py-2 2xl:px-6 ">
              Subscribe
            </h1>
          </div> */}
          {/* <button
            type="button"
            title="SearchBtn"
            aria-label="Search"
            className="flex justify-end items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button> */}
        </div>
        <div className="flex justify-center w-[90%] mx-auto ">
          <div className="overflow-scroll  no-scrollbar w-full xl:max-w-[73rem] text-white text-xs tracking-widest font-extrabold py-2 pt-2">
            <ul className="flex items-center text-xs gap-2  text-nowrap justify-evenly  sm:justify-center text-[#000000] uppercase">
              {home == true
                ? categoryList.map((item, i) =>
                    i === 0 ? (
                      <li key={i}>
                        <Link
                          className="hover:text-[#004ff2] "
                          key={i}
                          href={`/${slugify(item.toLowerCase())}`}
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
                            className=" hover:text-[#004ff2]"
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
                          className="hover:text-[#004ff2] "
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
                            className="hover:text-[#004ff2] "
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
                            className=" hover:text-[#004ff2]"
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
                              className="hover:text-[#004ff2] "
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
        {/* <div className="bg-[#F0F1F3] w-full px-4">
          <div
            className={`  w-full ${
              !sidebar && "hidden"
            }     tracking-wider 2xl:px-44 lg:pt-8 mx-auto  xl:max-w-[73rem] px-3"
          id="navbar-sticky overflow-y-auto h-screen animate-fadein bg-[#F0F1F3] text-[#000000]`}
          >
            <h1
              className={`text-2xl font-semibold py-6 ${freightbig.className}`}
            >
              Sections
            </h1>
            <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 ">
              <div>
                <Link
                  onClick={handleSidebar}
                  href={"/cuisine-types"}
                  className={` hover:text-[#004ff2] ${freightbig.className}`}
                >
                  Cuisine Types
                </Link>
                <ul className="font-light flex flex-col gap-3 pt-4">
                  {CuisineTypes.map((item, index) => (
                    <li key={index}>
                      <Link
                        onClick={handleSidebar}
                        href={`/cuisine-types/${item.toLowerCase()}`}
                        key={index}
                        className="hover:text-[#004ff2]"
                      >
                        {DeSlugify(item)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <Link
                  onClick={handleSidebar}
                  href={"/meal-types"}
                  className={` hover:text-[#004ff2] ${freightbig.className}`}
                >
                  Meal Types
                </Link>
                <ul className="font-light flex flex-col gap-3  pt-4">
                  {MealTypes.map((item, index) => (
                    <li key={index}>
                      <Link
                        onClick={handleSidebar}
                        href={`/meal-types/${item.toLowerCase()}`}
                        key={index}
                        className="hover:text-[#004ff2]"
                      >
                        {DeSlugify(item)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <Link
                  onClick={handleSidebar}
                  href={"/dietary-preferences"}
                  className={` hover:text-[#004ff2] ${freightbig.className}`}
                >
                  Dietary Preferences
                </Link>
                <ul className="font-light flex flex-col gap-3   pt-4">
                  {DietaryPreferences.map((item, index) => (
                    <li key={index}>
                      <Link
                        onClick={handleSidebar}
                        href={`/dietary-preferences/${item.toLowerCase()}`}
                        key={index}
                        className="hover:text-[#004ff2]"
                      >
                        {DeSlugify(item)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <Link
                  onClick={handleSidebar}
                  href={"/cooking-techniques"}
                  className={` hover:text-[#004ff2] ${freightbig.className}`}
                >
                  Cooking Techniques
                </Link>
                <ul className="font-light flex flex-col gap-3   pt-4">
                  {CookingTechniques.map((item, index) => (
                    <li key={index}>
                      <Link
                        onClick={handleSidebar}
                        href={`/cooking-techniques/${item.toLowerCase()}`}
                        key={index}
                        className="hover:text-[#004ff2]"
                      >
                        {DeSlugify(item)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <Link
                  onClick={handleSidebar}
                  href={"/ingredients"}
                  className={` hover:text-[#004ff2] ${freightbig.className}`}
                >
                  Ingredients
                </Link>
                <ul className="font-light flex flex-col gap-3   pt-4">
                  {Ingredients.map((item, index) => (
                    <li key={index}>
                      <Link
                        onClick={handleSidebar}
                        href={`/ingredients/${item.toLowerCase()}`}
                        key={index}
                        className="hover:text-[#004ff2]"
                      >
                        {DeSlugify(item)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <Link
                  onClick={handleSidebar}
                  href={"/recipe-formats"}
                  className={` hover:text-[#004ff2] ${freightbig.className}`}
                >
                  Recipe Formats
                </Link>
                <ul className="font-light flex flex-col gap-3  pt-4 ">
                  {RecipeFormats.map((item, index) => (
                    <li key={index}>
                      <Link
                        onClick={handleSidebar}
                        href={`/recipe-formats/${item.toLowerCase()}`}
                        key={index}
                        className="hover:text-[#004ff2]"
                      >
                        {DeSlugify(item)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <Link
                  onClick={handleSidebar}
                  href={"/modern-trends"}
                  className={` hover:text-[#004ff2] ${freightbig.className}`}
                >
                  Modern Trends
                </Link>
                <ul className="font-light flex flex-col gap-3  pt-4 ">
                  {ModernTrends.map((item, index) => (
                    <li key={index}>
                      <Link
                        onClick={handleSidebar}
                        href={`/modern-trends/${item.toLowerCase()}`}
                        key={index}
                        className="hover:text-[#004ff2]"
                      >
                        {DeSlugify(item)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <Link
                  onClick={handleSidebar}
                  href={"/seasonal-recipes"}
                  className={` hover:text-[#004ff2] ${freightbig.className}`}
                >
                  Seasonal Recipes
                </Link>
                <ul className="font-light flex flex-col gap-3  pt-4 ">
                  {SeasonalRecipes.map((item, index) => (
                    <li key={index}>
                      <Link
                        onClick={handleSidebar}
                        href={`/seasonal-recipes/${item.toLowerCase()}`}
                        key={index}
                        className="hover:text-[#004ff2]"
                      >
                        {DeSlugify(item)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <Link
                  onClick={handleSidebar}
                  href={"/global-flavors"}
                  className={` hover:text-[#004ff2] ${freightbig.className}`}
                >
                  Global Flavors
                </Link>
                <ul className="font-light flex flex-col gap-3  pt-4 ">
                  {GlobalFlavors.map((item, index) => (
                    <li key={index}>
                      <Link
                        onClick={handleSidebar}
                        href={`/global-flavors/${item.toLowerCase()}`}
                        key={index}
                        className="hover:text-[#004ff2]"
                      >
                        {DeSlugify(item)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <Link
                  onClick={handleSidebar}
                  href={"/special-occasions"}
                  className={` hover:text-[#004ff2] ${freightbig.className}`}
                >
                  Special Occasions
                </Link>
                <ul className="font-light flex flex-col gap-3   pt-4">
                  {SpecialOccasions.map((item, index) => (
                    <li key={index}>
                      <Link
                        onClick={handleSidebar}
                        href={`/special-occasions/${item.toLowerCase()}`}
                        key={index}
                        className="hover:text-[#004ff2] "
                      >
                        {DeSlugify(item)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>{" "}
            <Footer />
          </div>{" "}
        </div> */}
      </div>
    </nav>
  );
}

export default Navbar2;
