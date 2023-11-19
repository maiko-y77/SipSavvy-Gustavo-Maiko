import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
  const data = await prisma.article.createMany({
    data: {
      title: "What Does 5,000-Year-Old Wine Taste Like?",
      content: "The short answer: 😖 — By now, you have probably heard the 5,000-year-old tomb of Queen Meret-Neith has been discovered. When I was a kid, I was fascinated that the ancient Egyptians buried their famous ...",
      status: "pending"
    }
  })

  console.log(data)
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