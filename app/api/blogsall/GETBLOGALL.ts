import { PrismaClient } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";

// const prisma = new PrismaClient().$extends(withAccelerate());
const prisma = new PrismaClient();

export default async function GETBLOGALL(page = 0, pageSize = 100) {
  const blogs = await prisma.foodBlogs.findMany({
    select: {
      section: true,
      subsection: true,
      subsubsection: true,
      title: true,
      creationDate: true,
    },
    skip: page * pageSize,
    take: pageSize,
    // cacheStrategy: { ttl: 86400 },
  });
    await prisma.$disconnect(); 
  
  return blogs;
}
