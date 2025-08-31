import { PrismaClient } from "@prisma/client";
import DeSlugify from "@/libs/DeSlugify";
import { Feed } from "feed";

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
            { name: r.section },
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
