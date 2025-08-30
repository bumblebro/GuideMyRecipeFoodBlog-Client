import BLOGCOMPLETE from "@/app/api/blogscomplete/BLOGCOMPLETE";
import DeSlugify from "@/libs/DeSlugify";
import { FoodBlogs } from "@prisma/client";
import { Feed } from "feed";

export const revalidate = 3600; // revalidate at most every hour

const domain =
  process.env.NEXT_PUBLIC_BASE_API_URL?.replace(/^https:/, "http:") || "";

export async function GET(request: Request, response: Response) {
  const recipes = await BLOGCOMPLETE();
  // console.log(`rec`, recipes);

  const rss = generateRSSFeed(recipes);

  return new Response(rss, {
    status: 200,
    headers: { "Content-Type": "text/xml" },
  });
}

function generateRSSFeed(recipes: any) {
  const siteURL = process.env.NEXT_PUBLIC_BASE_API_URL || "";
  const date = new Date();
  const author = {
    name: "GuideMyRecipe",
    link: "https://GuideMyRecipe.com",
  };

  const feed = new Feed({
    title: "GuideMyRecipe",
    description:
      "Welcome to GuideMyRecipe, your go-to destination for all things food and drink. Here, we celebrate the joys of culinary exploration where every dish tells a story and every flavor brings an experience to life. Whether you&apos;re a passionate home cook, a curious foodie, or someone who just loves to savor the art of dining, you&apos;ve found the perfect place.",
    id: siteURL,
    link: siteURL,
    image: `${siteURL}/opengraph-image.png`,
    favicon: `${siteURL}/favicon.ico`,
    copyright: `All rights reserved ${date.getFullYear()}`,
    updated: date, // today's date
    generator: "Feed",
    feedLinks: {
      rss2: `${siteURL}/rss/feed.xml`, // xml format
      json: `${siteURL}/rss/feed.json`, // json fromat
    },
    author,
    language: "en-us",
  });

  recipes.map((r: any, i: any) => {
    const imageUrl =
      process.env.NEXT_PUBLIC_BASE_API_URL +
      `/api/og?` +
      `title=${r.title}` +
      `&cover=${r.imageurl}`;

    // console.log(`urllll`, imageUrl);

    const url = siteURL + "/" + r.slug;

    const cat1 = {
      name: r.section,
    };
    const cat2 = {
      name: r.subsection,
    };
    const cat3 = {
      name: r.subsubsection,
    };

    // const keywordString =
    //   r.recipedescription +
    //   "\n" +
    //   r?.seo?.primaryKeywords
    //     ?.map(
    //       (keyword: string) =>
    //         "#" +
    //         keyword
    //           .split(" ")
    //           .map(
    //             (word) =>
    //               word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    //           ) // Capitalize each word
    //           .join("")
    //     )
    //     .join(" ") +
    //   "\n" +
    //   "→ Click to learn more!";
    // console.log(keywordString);
    // if (imageUrl) {
    feed.addItem({
      title: DeSlugify(r.title),
      id: url,
      link: url,
      // description:
      //   r.recipedescription +
      //   "\n" +
      //   r?.seo?.primaryKeywords
      //     ?.map(
      //       (keyword: string) =>
      //         "#" +
      //         keyword
      //           .split(" ")
      //           .map(
      //             (word) =>
      //               word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      //           ) // Capitalize each word
      //           .join("")
      //     )
      //     .join(" ") +
      //   "\n" +
      //   "→ Click to learn more!",
      description: r.recipedescription,
      // content: r.recipedescription,
      author: [author],
      contributor: [author],
      date: r.creationDate,
      category: [cat1, cat2, cat3],
      image: {
        type: "image/png",
        url:
          domain +
          `/api/og?title=${r.title}&amp;cover=${encodeURIComponent(
            r.imageurl
          )}`,
      },
    });
    // }
  });

  return feed.rss2();
}
