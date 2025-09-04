// import { NextResponse } from "next/server";
// import prisma from "@/libs/prisma";
// import { Prisma } from "@prisma/client";

// export async function GET(request: Request) {
//   const { searchParams } = new URL(request.url);
//   const query = searchParams.get("q");

//   if (!query) {
//     return NextResponse.json(
//       { error: "Search query is required" },
//       { status: 400 }
//     );
//   }

//   try {
//     console.log("Searching for query:", query);

//     // First, let's check if we have any recipes in the database
//     const totalRecipes = await prisma.foodBlogs.count();
//     console.log("Total recipes in database:", totalRecipes);

//     // Get a sample of titles to verify data
//     const sampleTitles = await prisma.foodBlogs.findMany({
//       select: { title: true },
//       take: 5,
//     });
//     console.log("Sample titles:", sampleTitles);

//     const whereClause: Prisma.FoodBlogsWhereInput = {
//       OR: [
//         {
//           title: {
//             contains: query,
//             mode: "insensitive",
//           },
//         },
//         {
//           recipedescription: {
//             contains: query,
//             mode: "insensitive",
//           },
//         },
//         {
//           instructions: {
//             has: query,
//           },
//         },
//         {
//           equipments: {
//             has: query,
//           },
//         },
//       ],
//     };

//     const results = await prisma.foodBlogs.findMany({
//       where: whereClause,
//       select: {
//         id: true,
//         title: true,
//         slug: true,
//         imageurl: true,
//         imagealt: true,
//         section: true,
//         subsection: true,
//         subsubsection: true,
//         recipedescription: true,
//         creationDate: true,
//       },
//       orderBy: {
//         creationDate: "desc",
//       },
//       take: 20,
//     });

//     console.log("Search results count:", results.length);
//     if (results.length > 0) {
//       console.log("First result:", {
//         title: results[0].title,
//         description: results[0].recipedescription,
//       });
//     }

//     return NextResponse.json({ results: results || [] });
//   } catch (error) {
//     console.error("Search error:", error);
//     return NextResponse.json(
//       { error: "Failed to perform search", results: [] },
//       { status: 500 }
//     );
//   } finally {
//     await prisma.$disconnect();
//   }
// }

import { NextResponse } from "next/server";
import { Prisma } from "@prisma/client";
import { prisma } from "@/libs/prisma";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q");

  if (!query) {
    return NextResponse.json(
      { error: "Search query is required" },
      { status: 400 }
    );
  }

  try {
    console.log("Searching for query:", query);

    // Optional debug info; safe to leave as-is
    const [totalRecipes, sampleTitles] = await Promise.all([
      prisma.foodBlogs.count(),
      prisma.foodBlogs.findMany({ select: { title: true }, take: 5 }),
    ]);
    console.log("Total recipes in database:", totalRecipes);
    console.log("Sample titles:", sampleTitles);

    const whereClause: Prisma.FoodBlogsWhereInput = {
      OR: [
        {
          title: { contains: query, mode: "insensitive" },
        },
        {
          recipedescription: { contains: query, mode: "insensitive" },
        },
        {
          // Use `has` only if the column is an array type (e.g., string[])
          instructions: { has: query },
        },
        {
          // Same note for `equipments`
          equipments: { has: query },
        },
      ],
    };

    const results = await prisma.foodBlogs.findMany({
      where: whereClause,
      select: {
        id: true,
        title: true,
        slug: true,
        imageurl: true,
        imagealt: true,
        section: true,
        subsection: true,
        subsubsection: true,
        recipedescription: true,
        creationDate: true,
      },
      orderBy: { creationDate: "desc" },
      take: 20,
    });

    console.log("Search results count:", results.length);
    if (results.length > 0) {
      console.log("First result:", {
        title: results[0].title,
        description: results[0].recipedescription,
      });
    }

    return NextResponse.json({ results: results || [] });
  } catch (error) {
    console.error("Search error:", error);
    return NextResponse.json(
      { error: "Failed to perform search", results: [] },
      { status: 500 }
    );
  }
}
