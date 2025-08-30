import { Feed } from "feed";
import DeSlugify from "@/libs/DeSlugify";

const domain =
  process.env.NEXT_PUBLIC_BASE_API_URL?.replace(/^https:/, "http:") || "";
const siteURL = process.env.NEXT_PUBLIC_BASE_API_URL || "";

export function generateRSSFeed(recipes: any, category: string) {
  const date = new Date();
  const author = {
    name: "GuideMyRecipe",
    link: "https://GuideMyRecipe.com",
  };

  const feed = new Feed({
    title: `GuideMyRecipe - ${DeSlugify(category)}`,
    description:
      "Welcome to GuideMyRecipe, your go-to destination for all things food and drink. Here, we celebrate the joys of culinary exploration where every dish tells a story and every flavor brings an experience to life. Whether you're a passionate home cook, a curious foodie, or someone who just loves to savor the art of dining, you've found the perfect place.",
    id: siteURL,
    link: siteURL,
    image: `${siteURL}/opengraph-image.png`,
    favicon: `${siteURL}/favicon.ico`,
    copyright: `All rights reserved ${date.getFullYear()}`,
    updated: date,
    generator: "Feed",
    feedLinks: {
      rss2: `${siteURL}/rss/feed.xml`,
      json: `${siteURL}/rss/feed.json`,
    },
    author,
    language: "en-us",
  });

  recipes.map((r: any) => {
    const hasImageExtension = /\.(jpe?g|png|gif|webp|bmp)$/i.test(r.imageurl);

    if (hasImageExtension) {
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

      feed.addItem({
        title: DeSlugify(r.title),
        id: url,
        link: url,
        description: r.recipedescription,
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
    }
  });

  return feed.rss2();
}
