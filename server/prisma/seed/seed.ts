import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Create a new user
  const newUser = await prisma.user.create({
    data: {
      name: "John Doe",
      // Add more fields here if needed
    },
  });

  const data = await prisma.article.create({
    data: {
      title: "What Does 5,000-Year-Old Wine Taste Like?",
      content: "The short answer: 😖 — By now, you have probably heard the 5,000-year-old tomb of Queen Meret-Neith has been discovered. When I was a kid, I was fascinated that the ancient Egyptians buried their famous ...",
      status: "pending",
      author: {
        connect: {
          id: newUser.id,
        },
      }
    }
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })