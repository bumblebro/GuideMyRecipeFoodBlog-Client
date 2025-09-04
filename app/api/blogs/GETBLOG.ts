// import { PrismaClient } from "@prisma/client";
// import { withAccelerate } from "@prisma/extension-accelerate";
// import { request } from "http";
// import { NextRequest, NextResponse } from "next/server";

// // const prisma = new PrismaClient().$extends(withAccelerate());
// const prisma = new PrismaClient();

// const pageSize = 24;

// export default async function GETBLOG({ pageNo }: { pageNo: string }) {
//   const pageNum = parseInt(pageNo || "1");
//   const take = pageSize;
//   const skip = (pageNum - 1) * pageSize;

//   const blogs = await prisma.foodBlogs.findMany({
//     skip,
//     take,
//     orderBy: {
//       // Replace 'createdAt' with the actual name of your date field
//       creationDate: "desc",
//     },
//     // cacheStrategy: { ttl: 86400 },
//   });

//   const totalBlogs = await prisma.foodBlogs.count();
//   await prisma.$disconnect();

//   return {
//     blogs: blogs,
//     metaData: {
//       hasNextPage: take + skip < totalBlogs,
//       totalPages: Math.ceil(totalBlogs / take),
//       totalBlogs: totalBlogs,
//     },
//   };
// }

import { prisma } from "@/libs/prisma";
import { NextRequest, NextResponse } from "next/server";
// import { withAccelerate } from "@prisma/extension-accelerate"; // optional

const pageSize = 24;

export default async function GETBLOG({ pageNo }: { pageNo: string }) {
  const pageNum = Math.max(1, parseInt(pageNo || "1", 10));
  const take = pageSize;
  const skip = (pageNum - 1) * pageSize;

  const [blogs, totalBlogs] = await Promise.all([
    prisma.foodBlogs.findMany({
      skip,
      take,
      orderBy: { creationDate: "desc" },
      // cacheStrategy: { ttl: 86400 }, // works with Accelerate/Data Proxy
    }),
    prisma.foodBlogs.count(),
  ]);

  return {
    blogs,
    metaData: {
      hasNextPage: take + skip < totalBlogs,
      totalPages: Math.ceil(totalBlogs / take),
      totalBlogs,
    },
  };
}
