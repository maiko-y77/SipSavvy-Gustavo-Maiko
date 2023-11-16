import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
  const data = await prisma.article.createMany({
    data: {
      title: "My First Article",
      content: "I am would like to work with prisma and mongodb but it sucks",
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