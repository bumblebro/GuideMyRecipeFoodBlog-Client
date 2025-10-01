import { PrismaClient } from "@prisma/client";
import DeSlugify from "@/libs/DeSlugify";
import { Feed } from "feed";

let prisma: PrismaClient;
declare const globalThis: { prisma?: PrismaClient };
if (!globalThis.prisma) globalThis.prisma = new PrismaClient();
prisma = globalThis.prisma;

const boardId = {
  "Summer-Grilling": "1057571993686792027", // Summer Grilling
  "BBQ-Classics": "1057571993686791775", // BBQ Classics Recipes
  "Summer-Lunch-Ideas": "1057571993686792028", // Summer Lunch Ideas
  "Summer-Salads-and-Sides": "1057571993686792029", // Summer Salads and Sides
  "Quick-Summer-Meals": "1057571993686792014", // Quick Summer Meals
  "Easy-Summer-Desserts": "1057571993686791785", // Easy Summer Desserts
  "Summer-Breakfast-Ideas": "1057571993686792025", // Summer Breakfast Ideas
  "Summer-Snacks-for-Kids": "1057571993686792030", // Summer Snacks for Kids
  "Rhubarb-Sauces-and-Jams": "1057571993686792017", // Rhubarb Sauces and Jams
  "Rhubarb-Baked-Goods": "1057571993686792015", // Rhubarb Baked Goods
  "Strawberry-Desserts": "1057571993686792023", // Strawberry Desserts
  "Strawberry-Breakfast-and-Drinks": "1057571993686792021", // Strawberry Breakfast and Drinks
  "Strawberry-Salads": "1057571993686792024", // Strawberry Salads
  "Graduation": "1057571993686791999", // Graduation Recipes
  "Healthy-Eating": "1057571993686791790", // Healthy Eating
  "Cultural-Favorites": "1057571993686791993", // Cultural Favorites
  "Cool-Drinks": "1057571993686791781", // Cool Drinks
  "Pasta-and-Soups": "1057571993686792011", // Pasta and Soups
  "Crockpot-and-Camping": "1057571993686791990", // Crockpot and Camping
  "Fruit-Based-Desserts": "1057571993686791997", // Fruit-Based Desserts
  "Frozen-Desserts": "1057571993686791996", // Frozen Desserts
  "Baked-Desserts": "1057571993686791773", // Baked Desserts
  "Vegan-Recipes": "1057571993686792031", // Vegan Recipes
  "Keto-and-Low-Carb": "1057571993686792002", // Keto and Low Carb
  "Asian-Food": "1057571993686791772", // Asian Food
  "Mexican-Food": "1057571993686792008", // Mexican Food
  "Italian-Food": "1057571993686792001", // Italian Food
  "Summer-Fruits": "1057571993686792026", // Summer Fruits
  "Baked-Fruit": "1057571993686791774", // Baked Fruit
  "Mocktails": "1057571993686792010", // Mocktails
  "Smoothies": "1057571993686792020", // Smoothies
  "Coffee-and-Tea": "1057571993686791986", // Coffee and Tea
  "Single-Serve": "1057571993686792019", // Single Serve
  "Cheese-Based": "1057571993686791985", // Cheese Based
  "Milk-and-Yogurt": "1057571993686792009", // Milk and Yogurt
  "Roasted-Vegetables": "1057571993686792018", // Roasted Vegetables
  "Vegetable-Mains": "1057571993686792032", // Vegetable Mains
  "Beef-Recipes": "1057571993686791776", // Beef Recipes
  "Chicken-Recipes": "1057571993686791778", // Chicken Recipes
  "Low-Calorie-Meals": "1057571993686792004", // Low Calorie Meals
  "High-Protein-Recipes": "1057571993686791791", // High Protein Recipes
  "Meal-Prep": "1057571993686792006", // Meal Prep
  "Desserts-and-Cookies": "1057571993686791994", // Desserts and Cookies
  "Cold-Pasta-Salad-Recipes": "1057571993686791987", // Cold Pasta Salad Recipes
  "Rhubarb-Desserts": "1057571993686792016", // Rhubarb Desserts
  "Layer-Cakes": "1057571993686792003", // Layer Cakes
  "Healthy-Summer-Dinners": "1057571993686792000", // Healthy Summer Dinners
  "Breakfast-Ideas": "1057571993686791777", // Breakfast Ideas
  "Gluten-Free": "1057571993686791998", // Gluten Free
  "Dinner-Ideas": "1057571993686791784", // Dinner Ideas
  "Father's-Day": "1057571993686791786", // Father's Day
  "Pork-Recipes": "1057571993686792012", // Pork Recipes
  "Lunch-Ideas": "1057571993686792005", // Lunch Ideas
  "Memorial-Day": "1057571993686792007" // Memorial Day
};


export const dynamic = "force-dynamic";
const domain =
  process.env.NEXT_PUBLIC_BASE_API_URL?.replace(/^https:/, "http:") || "";

const count = parseInt(process.env.RANDOMBLOGCOUNT || "6", 10);

export async function GET(request: Request, response: Response) {
  // Fetch random blogs directly using Prisma
  // const prisma = new PrismaClient();

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
