// import { Prisma, PrismaClient } from "@prisma/client";
// import { withAccelerate } from "@prisma/extension-accelerate";
// import { request } from "http";
// import { NextRequest, NextResponse } from "next/server";

// // const prisma = new PrismaClient().$extends(withAccelerate());
// const prisma = new PrismaClient();

// export default async function GETBLOGBYSECTION({
//   subCategory,
// }: {
//   subCategory?: string;
// }) {
//   try {
//     // const { searchParams } = new URL(req.url);
//     // const category = searchParams.get("category");
//     // const subCategory = searchParams.get("subCategory");
//     // const subSubCategory = searchParams.get("subSubCategory");
//     // const pagSize = parseInt(pageSize || "24");

//     // const pageNum = pageNo || 1;

//     // const take = pagSize;
//     // const skip = (pageNum - 1) * take;

//     const whereClause: Prisma.FoodBlogsWhereInput = {};

//     // if (category) {
//     //   whereClause.section = {
//     //     contains: category,
//     //     mode: "insensitive",
//     //   };
//     // }

//     if (subCategory) {
//       whereClause.subsection = {
//         contains: subCategory,
//         mode: "insensitive",
//       };
//     }

//     // if (subSubCategory) {
//     //   whereClause.subsubsection = {
//     //     contains: subSubCategory,
//     //     mode: "insensitive",
//     //   };
//     // }

//     const blogs = await prisma.foodBlogs.findMany({
//       // skip, // Number of records to skip
//       // take, // Number of records to take
//       select: {
//         author: true, // Name of the author
//         section: true,
//         subsection: true,
//         subsubsection: true,
//         title: true, // Title of the page
//         slug: true, // URL-friendly slug for the blog
//         imageurl: true, // URL of the main image
//         content: true, // Short and detailed description of the recipe
//         instructions: true, // Step-by-step instructions for the recipe
//         recipedescription: true,
//         recipedetails: true, // Recipe details for different serving sizes (1X, 2X, 3X, 4X)
//         creationDate: true, // Date the blog was created
//         seo: true,
//       },
//       where: whereClause,
//       orderBy: {
//         // Replace 'createdAt' with the actual name of your date field
//         creationDate: "desc",
//       },
//       // cacheStrategy: { ttl: 86400 },
//     });

//     // const totalBlogs = await prisma.foodBlogs.count({
//     //   where: whereClause,
//     //   // cacheStrategy: { ttl: 86400 },
//     // });
//     return blogs;
//   } catch (error) {
//     console.error("Database Error:", error);
//     // throw new Error("Database Error");
//   } finally {
//     await prisma.$disconnect();
//   }
// }

import { prisma } from "@/libs/prisma";
import { Prisma } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export default async function GETBLOGBYSECTION({
  subCategory,
}: {
  subCategory?: string;
}) {
  try {
    const whereClause: Prisma.FoodBlogsWhereInput = {};

    if (subCategory) {
      whereClause.subsection = {
        contains: subCategory,
        mode: "insensitive",
      };
    }

    const blogs = await prisma.foodBlogs.findMany({
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
      where: whereClause,
      orderBy: {
        creationDate: "desc",
      },
    });

    return blogs;
  } catch (error) {
    console.error("Database Error:", error);
    throw error;
  }
}
