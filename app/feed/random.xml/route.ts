import { PrismaClient } from "@prisma/client";
import DeSlugify from "@/libs/DeSlugify";
import { Feed } from "feed";

const boardId = {
  "Summer-Grilling": "708683760053913573", // Summer Grilling Recipes
  "BBQ-Classics": "708683760053913574", // BBQ Classics Recipes
  "Summer-Lunch-Ideas": "708683760053913575", // Summer Lunch Ideas
  "Summer-Salads-and-Sides": "708683760053913576", // Summer Salads and Sides
  "Quick-Summer-Meals": "708683760053913577", // Quick Summer Meals
  "Easy-Summer-Desserts": "708683760053913578", // Easy Summer Desserts
  "Summer-Breakfast-Ideas": "708683760053913579", // Summer Breakfast Ideas
  "Summer-Snacks-for-Kids": "708683760053913581", // Summer Snacks for Kids
  "Rhubarb-Sauces-and-Jams": "708683760053913582", // Rhubarb Sauces and Jams
  "Rhubarb-Baked-Goods": "708683760053913583", // Rhubarb Baked Goods
  "Strawberry-Desserts": "708683760053913584", // Strawberry Desserts
  "Strawberry-Breakfast-and-Drinks": "708683760053913585", // Strawberry Breakfast and Drinks
  "Strawberry-Salads": "708683760053913586", // Strawberry Salads
  Graduation: "708683760053913587", // Graduation
  "Healthy-Eating": "708683760053913588", // Healthy Eating
  "Cultural-Favorites": "708683760053913589", // Cultural Favorites Recipes
  "Cool-Drinks": "708683760053913590", // Cool Drinks
  "Pasta-and-Soups": "708683760053913591", // Pasta and Soups
  "Crockpot-and-Camping": "708683760053913592", // Crockpot and Camping Recipes
  "Fruit-Based-Desserts": "708683760053913593", // Fruit Based Desserts
  "Frozen-Desserts": "708683760053913594", // Frozen-Desserts
  "Baked-Desserts": "708683760053913595", // Baked Desserts
  "Vegan-Recipes": "708683760053913596", // Vegan Recipes
  "Keto-and-Low-Carb": "708683760053913597", // Keto and Low Carb
  "Asian-Food": "708683760053913598", // Asian Food Recipes
  "Mexican-Food": "708683760053913599", // Mexican Food Recipes
  "Italian-Food": "708683760053913600", // Italian Food Recipes
  "Summer-Fruits": "708683760053913601", // Summer Fruits Recipes
  "Baked-Fruit": "708683760053913602", // Baked Fruit Recipes
  Mocktails: "708683760053913603", // Mocktails
  Smoothies: "708683760053913604", // Smoothies
  "Coffee-and-Tea": "708683760053913605", // Coffee and Tea
  "Single-Serve": "708683760053913606", // Single Serve Recipes
  "Cheese-Based": "708683760053913607", // Cheese Based Recipes
  "Milk-and-Yogurt": "708683760053913608", // Milk and Yogurt Recipes
  "Roasted-Vegetables": "708683760053913610", // Roasted Vegetables Recipes
  "Vegetable-Mains": "708683760053913611", // Vegetable Mains
  "Beef-Recipes": "708683760053913612", // Beef Recipes
  "Chicken-Recipes": "708683760053913613", // Chicken Recipes
  "Low-Calorie-Meals": "708683760053913614", // Low Calorie Meals
  "High-Protein-Recipes": "708683760053913615", // High Protein Recipes
  "Meal-Prep": "708683760053913616", // Meal Prep
};

export const dynamic = "force-dynamic";
const domain =
  process.env.NEXT_PUBLIC_BASE_API_URL?.replace(/^https:/, "http:") || "";

const count = parseInt(process.env.RANDOMBLOGCOUNT || "6", 10);

export async function GET(request: Request, response: Response) {
  // Fetch random blogs directly using Prisma
  const prisma = new PrismaClient();
  const totalBlogs = await prisma.foodBlogs.count();
  let blogs = [];
  if (totalBlogs <= count) {
    blogs = await prisma.foodBlogs.findMany({
      take: count,
      orderBy: { creationDate: "desc" },
    });
  } else {
    // Get unique random skips
    const skips = new Set<number>();
    while (skips.size < count) {
      skips.add(Math.floor(Math.random() * totalBlogs));
    }
    const blogPromises = Array.from(skips).map((skip) =>
      prisma.foodBlogs.findFirst({
        skip,
        select: {
          author: true,
          section: true,
          subsection: true,
          subsubsection: true,
          title: true,
          slug: true,
          imageurl: true,
          content: true,
          instructions: true,
          recipedescription: true,
          recipedetails: true,
          creationDate: true,
          seo: true,
        },
      })
    );
    blogs = (await Promise.all(blogPromises)).filter(Boolean);
  }
  await prisma.$disconnect();
  const rss = generateRSSFeed(blogs);
  return new Response(rss, {
    status: 200,
    headers: { "Content-Type": "text/xml" },
  });

  function generateRSSFeed(blogs: any) {
    const siteURL = process.env.NEXT_PUBLIC_BASE_API_URL || "";
    const date = new Date();
    const author = {
      name: "SavoryTouch",
      link: "https://savorytouch.com",
    };

    const feed = new Feed({
      title: "SavoryTouch - Random Blogs",
      description:
        "A random selection of 6 blogs from SavoryTouch. Discover something new each time!",
      id: siteURL,
      link: siteURL,
      image: `${siteURL}/opengraph-image.png`,
      favicon: `${siteURL}/favicon.ico`,
      copyright: `All rights reserved ${date.getFullYear()}`,
      updated: date,
      generator: "Feed",
      feedLinks: {
        rss2: `${siteURL}/feed/random.xml`,
        json: `${siteURL}/feed/random.json`,
      },
      author,
      language: "en-us",
    });

    blogs.forEach((r: any) => {
      const id = boardId[r.subsection as keyof typeof boardId];

      const hasImageExtension = /\.(jpe?g|png|gif|webp|bmp)$/i.test(r.imageurl);
      if (hasImageExtension) {
        const imageUrl =
          process.env.NEXT_PUBLIC_BASE_API_URL +
          `/api/og?` +
          `title=${r.title}` +
          `&cover=${r.imageurl}`;
        const url = siteURL + "/" + r.slug;
        feed.addItem({
          title: DeSlugify(r.title),
          id: url,
          link: url,
          description: r.recipedescription,
          author: [author],
          contributor: [author],
          date: new Date(Date.now() - 60 * 60 * 1000), // pubDate is set to 1 hour before now
          category: [
            { name: id },
            { name: r.subsection },
            { name: r.subsubsection },
          ],
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
}
