import { PrismaClient } from '@prisma/client'
import { MOCK_DESIGNS } from '../src/lib/designs-data'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding database with YourUI designs...')
  
  for (const design of MOCK_DESIGNS) {
    await prisma.design.upsert({
      where: { slug: design.slug },
      update: {},
      create: {
        mockId: design._id,
        title: design.title,
        slug: design.slug,
        description: design.description,
        category: design.category,
        thumbnail: design.thumbnail,
        isPremium: design.isPremium || false,
        views: design.views || 0,
        downloads: design.downloads || 0,
        author: design.author || 'YourUI',
        htmlCode: design.htmlCode,
        cssCode: design.cssCode,
        jsCode: design.jsCode || '',
        tags: design.tags,
        createdAt: design.createdAt ? new Date(design.createdAt) : new Date(),
      },
    })
  }

  console.log(`Successfully seeded ${MOCK_DESIGNS.length} designs!`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
