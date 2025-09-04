// import { PrismaClient } from "@prisma/client";
// import { withAccelerate } from "@prisma/extension-accelerate";

// // const prisma = new PrismaClient().$extends(withAccelerate());
// const prisma = new PrismaClient();

// export default async function BLOGCOMPLETE() {
//   const blogs = await prisma.foodBlogs.findMany({
//     select: {
//       author: true, // Name of the author
//       section: true,
//       subsection: true,
//       subsubsection: true,
//       title: true, // Title of the page
//       slug: true, // URL-friendly slug for the blog
//       imageurl: true, // URL of the main image
//       content: true, // Short and detailed description of the recipe
//       instructions: true, // Step-by-step instructions for the recipe
//       recipedescription: true,
//       recipedetails: true, // Recipe details for different serving sizes (1X, 2X, 3X, 4X)
//       creationDate: true, // Date the blog was created
//       seo: true
//     },
//     orderBy: {
//       // Replace 'createdAt' with the actual name of your date field
//       creationDate: "desc",
//     },

//     // cacheStrategy: { ttl: 86400 },
//   });
//     await prisma.$disconnect();

//   return blogs;
// }

import { prisma } from "@/libs/prisma";
import { withAccelerate } from "@prisma/extension-accelerate";

export default async function BLOGCOMPLETE() {
  const blogs = await prisma.foodBlogs.findMany({
    select: {
      author: true, // Name of the author
      section: true,
      subsection: true,
      subsubsection: true,
      title: true, // Title of the page
      slug: true, // URL-friendly slug for the blog
      imageurl: true, // URL of the main image
      content: true, // Short and detailed description of the recipe
      instructions: true, // Step-by-step instructions for the recipe
      recipedescription: true,
      recipedetails: true, // Recipe details for different serving sizes (1X, 2X, 3X, 4X)
      creationDate: true, // Date the blog was created
      seo: true,
    },
    orderBy: {
      creationDate: "desc",
    },
    // cacheStrategy: { ttl: 86400 }, // works if you enable Accelerate/Data Proxy
  });

  return blogs; // 👈 no prisma.$disconnect()
}
