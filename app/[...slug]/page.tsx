import BlogDisplay from "@/components/BlogDisplay/BlogDisplay";
import BlogList from "@/components/bloglist/BlogList";
import Category from "@/components/category/Category";
import CategoryPost from "@/components/category/CategoryPost";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import Paginationbloglist from "@/components/pagination/Paginationbloglist";
import Sidebar from "@/components/sidebar/Sidebar";
import Delay from "@/libs/Delay";
import { FoodBlogs } from "@prisma/client";
import { Metadata } from "next";
import { useEffect, useState } from "react";
import GETBLOGSLAYER from "../api/blogslayer/GETBLOGSLAYER";
import GETBLOGPOST from "../api/blogpost/GETBLOGPOST";
import GETBLOGALL from "../api/blogsall/GETBLOGALL";
import GenerateSlugs from "../../libs/GenerateSlugs";
import { subSections } from "@/libs/Section";
import DeSlugify from "@/libs/DeSlugify";
import { notFound } from "next/navigation";
import Navbar3 from "@/components/navbar3/page";
import StructuredData from "@/components/StructuredData/StructuredData";

interface params {
  params: {
    slug: string[];
  };
}

interface JsonValue {
  [key: string]: any;
}

type SEOType = {
  ogDescription: string;
  metaDescription: string;
  ogTitle: string;
  ogImage: string;
  primaryKeywords: string[];
  secondaryKeywords: string[];
};

export const dynamic = 'force-dynamic';
// export const revalidate = 86400; // remove or comment this

function timeToISO8601Duration(seconds: number) {
  const units = [
    { symbol: "Y", value: 365 * 24 * 3600 },
    { symbol: "D", value: 24 * 3600 },
    { symbol: "H", value: 3600 },
    { symbol: "M", value: 60 },
    { symbol: "S", value: 1 },
  ];

  let duration = "P";
  let hasTime = false;

  for (const { symbol, value } of units) {
    const quotient = Math.floor(seconds / value);
    if (quotient > 0) {
      seconds -= quotient * value;
      if (!hasTime && ["H", "M", "S"].includes(symbol)) {
        duration += "T";
        hasTime = true;
      }
      duration += `${quotient}${symbol}`;
    }
  }

  return duration;
}

/*
export async function generateStaticParams() {
  const sluglayer = await GenerateSlugs(subSections);

  let paramsArray: any = [];
  let page = 0;
  const pageSize = 100;

  try {
    while (true) {
      // Fetch paginated blogs
      const response = await GETBLOGALL(page, pageSize);

      if (response.length === 0) {
        break; // Break loop when no more records
      }

      const titleArray = response?.map((item: any) => {
        if (item.section && item.subsection && item.subsubsection) {
          return {
            slug: [
              item.section.toLowerCase(),
              item.subsection.toLowerCase(),
              item.subsubsection.toLowerCase(),
              item.title.toLowerCase(),
            ],
          };
        }
      });
      // Append to params array
      paramsArray = [...paramsArray, ...titleArray];
      page++; // Move to the next page
    }
    // console.log(`sluglayer`, sluglayer.length);
    // console.log(`paramsArray`, paramsArray.length);
    const sortedArray = paramsArray.sort((a: any, b: any) => b - a);
    // const slicedArray = sortedArray;
    const slicedArray = sortedArray.slice(0, 100);
    // console.log(`lengthh`, slicedArray.length());
    return [...sluglayer, ...slicedArray];
    // return [...slicedArray];
  } catch (error) {
    // console.error("Error fetching blogs:", error);
    return [];
  }
}
*/

export async function generateMetadata({ params }: params): Promise<Metadata> {
  let categoryList: string[] = [];

  // await Delay();
  let pageNumber: number = 1;
  let slugs: string[] = [];

  let { slug } = params;
  let decodedslug = slug.map((item: string) => decodeURIComponent(item));
  let pageIndex = decodedslug.indexOf("page");
  let page = 1;

  let currentPost: FoodBlogs | null = null;

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

  if (pageIndex !== -1 && pageIndex < decodedslug.length - 1) {
    pageNumber = parseInt(decodedslug[pageIndex + 1]);
    page = parseInt(decodedslug[pageIndex + 1]);
    decodedslug.splice(pageIndex, 2);
    slugs = decodedslug;
  }

  if (decodedslug.length < 3) {
    const url = `${decodedslug.slice(0, decodedslug.length).join("/")}`;

    return {
      title: ` 
      ${
        DeSlugify(decodedslug[decodedslug.length - 1])[0].toUpperCase() +
        DeSlugify(decodedslug[decodedslug.length - 1]).slice(1)
      } - ${categoryList?.map((item) => DeSlugify(` ${item}`))} & More`,
      description: `Here are the latest on ${DeSlugify(
        decodedslug[decodedslug.length - 1]
      )}, ${categoryList?.map((item) => DeSlugify(` ${item}`))} & More`,
      metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_API_URL}`),
      alternates: {
        canonical: `/${url}`,
      },
    };
  } else if (decodedslug.length === 3) {
    const url = `${decodedslug.slice(0, decodedslug.length).join("/")}`;

    return {
      title: `${
        DeSlugify(decodedslug[decodedslug.length - 1])[0].toUpperCase() +
        DeSlugify(decodedslug[decodedslug.length - 1]).slice(1)
      }`,
      description: `Here are the latest on ${
        decodedslug[decodedslug.length - 1]
      }`,
      metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_API_URL}`),
      alternates: {
        canonical: `${url}`,
      },
    };
  } else {
    try {
      const url = `${decodedslug.slice(0, decodedslug.length).join("/")}`;

      const response = await GETBLOGPOST({
        title: decodedslug[decodedslug.length - 1],
      });
      if (response) {
        currentPost = response;
      }
      const domain = process.env.NEXT_PUBLIC_BASE_API_URL?.replace(
        /^https:/,
        "http:"
      );
      const imageUrl =
        domain +
        "/api/og?" +
        "title=" +
        encodeURIComponent((currentPost?.seo as SEOType)?.ogTitle || "") +
        "&description=" +
        encodeURIComponent((currentPost?.seo as SEOType)?.ogDescription || "") +
        "&cover=" +
        encodeURIComponent(currentPost?.imageurl || "");
      // console.log(`url`, imageUrl);
      return {
        title: DeSlugify(currentPost?.title || ""),
        description: (currentPost?.seo as SEOType)?.metaDescription,
        keywords: [
          ...((currentPost?.seo as SEOType)?.primaryKeywords
            ? (currentPost?.seo as SEOType)?.primaryKeywords
            : []),
          ...((currentPost?.seo as SEOType)?.secondaryKeywords
            ? (currentPost?.seo as SEOType)?.secondaryKeywords
            : []),
        ],
        openGraph: {
          images: [
            {
              url: currentPost?.imageurl || "",
            },
          ],
        },
        metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_API_URL}`),

        alternates: {
          canonical: `/${url}`,
        },
      };
    } catch (e) {
      // console.log(`errrorr`, e);
      return {};
    }
  }
}

function validateCategoryPath(pathArray: string[], sections: object) {
  // Check if the length of the array is less than 4
  if (pathArray.length >= 4) {
    return false; // Invalid length
  }

  let currentSection: any = sections;

  // Iterate through each element in the path array
  for (let i = 0; i < pathArray.length; i++) {
    const currentCategory = pathArray[i];

    // Convert the section to lowercase and match it with lowercased keys
    const matchingKey = Object.keys(currentSection).find(
      (key) => key.toLowerCase() === currentCategory.toLowerCase()
    );

    if (matchingKey) {
      currentSection = currentSection[matchingKey]; // Go deeper into the next section
    } else if (
      Array.isArray(currentSection) &&
      // currentSection.includes(currentCategory)
      currentSection.some(
        (category: string) =>
          category.toLowerCase() === currentCategory.toLowerCase()
      )
    ) {
      return true; // If we reach the end and it's an array that contains the category
    } else {
      return false; // If the category is not found at any level
    }
  }

  // If the loop completes, it means the path exists
  return true;
}

async function BlogCategory({ params }: params) {
  let sidebar = false;
  let posts: FoodBlogs[] = [];
  let relposts: FoodBlogs[] = [];
  let latposts: FoodBlogs[] = [];
  let totalPages = 1;
  let totalBlogs: number = 1;
  let hasNextPage = false;
  let pageNumber: number = 1;
  // let currentPost: {
  //   id: string;
  //   author: string;
  //   title: string;
  //   imageurl: string;
  //   imagealt: string;
  //   quote: string;
  //   section: string;
  //   subsection: string;
  //   subsubsection: string;
  //   content: JsonValue[];
  //   seo: JsonValue;
  //   creationDate: Date;
  // } | null = null;
  let currentPost: FoodBlogs | null = null;

  let slugs: string[] = [];
  let navslugs: string[] = [];
  let page = 1;

  let { slug } = params;
  let decodedslug = slug.map((item: string) => decodeURIComponent(item));
  slugs = decodedslug;

  let pageIndex = decodedslug.indexOf("page");
  if (pageIndex !== -1 && pageIndex < decodedslug.length - 1) {
    // if (pageIndex !== -1 && decodedslug[decodedslug.length - 1] == "page") {
    pageNumber = parseInt(decodedslug[pageIndex + 1]);
    page = parseInt(decodedslug[pageIndex + 1]);
    decodedslug.splice(pageIndex, 2);
    slugs = decodedslug;
  }

  // if ((slugs.length = 4)) {
  // navslugs = decodedslug.slice(0, 2);
  // } else navslugs = slugs;
  // if (decodedslug.length < 4) {
  //   console.log(`weferwfwe`, decodedslug);
  //   decodedslug.map((item) => {
  //     if (!isCategoryPresent(item, subSections)) {
  //       return notFound();
  //     }
  //   });
  // }
  const moddecodedslug = decodedslug.slice(0, 3);

  if (!validateCategoryPath(moddecodedslug, subSections)) {
    return notFound();
  }

  if (decodedslug.length === 1) {
    // if (!isCategoryPresent(decodedslug[0], subSections)) {
    //   return notFound();
    // }
    const response = await GETBLOGSLAYER({
      category: decodedslug[0],
      pageNo: page,
    });
    if (!response) {
      return notFound();
    }

    posts = response.blogs;
    totalPages = response.metaData.totalPages;
    hasNextPage = response.metaData.hasNextPage;
    totalBlogs = response.metaData.totalBlogs;
  } else if (decodedslug.length === 2) {
    // if (!isCategoryPresent(decodedslug[1], subSections)) {
    //   return notFound();
    // }
    const response = await GETBLOGSLAYER({
      subCategory: decodedslug[1],
      pageNo: page,
    });
    if (!response) {
      return notFound();
    }

    posts = response.blogs;
    totalPages = response.metaData.totalPages;
    hasNextPage = response.metaData.hasNextPage;
    totalBlogs = response.metaData.totalBlogs;
  } else if (decodedslug.length === 3) {
    const response = await GETBLOGSLAYER({
      subSubCategory: decodedslug[2],
      pageNo: page,
    });
    if (!response) {
      return notFound();
    }

    posts = response.blogs;
    totalPages = response.metaData.totalPages;
    hasNextPage = response.metaData.hasNextPage;
    totalBlogs = response.metaData.totalBlogs;
  } else if (decodedslug.length > 3) {
    const response = await GETBLOGPOST({
      title: decodedslug[decodedslug.length - 1],
    });
    if (!response) {
      return notFound();
    }

    currentPost = response;
  }
  // ----------------------------

  if (currentPost?.subsubsection) {
    const response = await GETBLOGSLAYER({
      subSubCategory: currentPost.subsubsection,
      pageNo: 1,
      pageSize: "24",
    });

    if (response) {
      relposts = response.blogs;
    }
  } else if (currentPost?.subsection) {
    const response = await GETBLOGSLAYER({
      subCategory: currentPost.subsection,
      pageNo: 1,
      pageSize: "24",
    });

    if (response) {
      relposts = response.blogs;
    }
  } else if (currentPost?.section) {
    const response = await GETBLOGSLAYER({
      category: currentPost.section,
      pageNo: 1,
      pageSize: "24",
    });

    if (response) {
      relposts = response.blogs;
    }
  }
  // ----------------------------

  if (currentPost?.subsection) {
    const response = await GETBLOGSLAYER({
      subCategory: currentPost.subsection,
      pageNo: 1,
      pageSize: "24",
    });

    if (response) {
      latposts = response.blogs;
    }
  } else if (currentPost?.section) {
    const response = await GETBLOGSLAYER({
      category: currentPost.section,
      pageNo: 1,
      pageSize: "24",
    });

    if (response) {
      latposts = response.blogs;
    }
  } else if (currentPost?.subsubsection) {
    const response = await GETBLOGSLAYER({
      subSubCategory: currentPost.subsubsection,
      pageNo: 1,
      pageSize: "24",
    });

    if (response) {
      latposts = response.blogs;
    }
  }

  navslugs = await slugs.slice(0, 3);

  const recipeDetails = (currentPost?.recipedetails as Record<string, any>)?.[
    "1X"
  ] || {
    ingredients: [],
    instructions: [],
    nutrition: {},
    notes: [],
    yield: "",
    cookTime: "",
    totalTime: "",
    preparationTime: "",
  };

  type JsonObject = { [key: string]: unknown };
  // const seo = currentPost?.seo as JsonObject;
  // interface Seo {
  //   primaryKeywords?: string[];
  //   secondaryKeywords?: string[];
  // }
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Recipe",
    author: {
      "@type": "Person",
      givenName: currentPost?.author,
      name: currentPost?.author,
    },
    cookTime: timeToISO8601Duration(recipeDetails.cookTime),
    datePublished: currentPost?.creationDate,
    description: currentPost?.recipedescription,
    image: currentPost?.imageurl,
    recipeIngredient: recipeDetails.ingredients.map(
      (ingredient: any) => `${ingredient.quantity} ${ingredient.name}`
    ),
    name: currentPost?.title,
    prepTime: timeToISO8601Duration(recipeDetails?.preparationTime),
    recipeYield: recipeDetails?.yield,
    totalTime: timeToISO8601Duration(recipeDetails?.totalTime),
    recipeInstructions: currentPost?.instructions.map((e) => e),
    keywords: [
      ...((currentPost?.seo as SEOType)?.primaryKeywords ?? []),
      ...((currentPost?.seo as SEOType)?.secondaryKeywords ?? []),
    ],
    // keywords: [
    //   (currentPost?.seo?.primaryKeywords ?? []).concat(
    //     currentPost?.seo?.secondaryKeywords ?? []
    //   ),
    // ],

    recipeCategory: currentPost?.section,
    recipeCuisine: currentPost?.subsection,
    nutrition: {
      "@type": "NutritionInformation",
      calories: recipeDetails?.nutrition?.calories,
      fatContent: recipeDetails?.nutrition?.fat,
      fiberContent: recipeDetails?.nutrition?.fiber,
      proteinContent: recipeDetails?.nutrition?.protien,
      carbohydrateContent: recipeDetails?.nutrition?.carbohydrates,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: (Math.random() * (4.8 - 4.5) + 4.5).toFixed(1),
      ratingCount: Math.floor(Math.random() * (160 - 45 + 1)) + 45,
    },
  };

  return (
    <>
      {currentPost ? (
        <>
          <StructuredData post={currentPost} recipeDetails={recipeDetails} />
          <Navbar3 decodedslug={navslugs} ispost={true} />
          <CategoryPost decodedslug={slugs} totalBlogs={totalBlogs} />
          <BlogDisplay
            decodedslug={decodedslug}
            currentPost={currentPost || []}
            posts={relposts}
            latposts={latposts}
          />
        </>
      ) : (
        <>
          {/* <Navbar decodedslug={slugs} /> */}
          <Navbar3 decodedslug={slugs} />
          <Category decodedslug={slugs} totalBlogs={totalBlogs} />
          <BlogList posts={posts} />{" "}
          <Paginationbloglist
            pageNo={pageNumber}
            totalPages={totalPages}
            hasNextPage={hasNextPage}
            slug={slugs}
          />
        </>
      )}
    </>
  );
}

export default BlogCategory;
