import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient();

const posts = [
  {
    id: 1,
    title: 'Post 1',
    content: 'Content 1',
    tags: ['tag1', 'tag2'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 2,
    title: 'Post 2',
    content: 'Content 2',
    tags: ['tag1', 'tag2'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 3,
    title: 'Post 3',
    content: 'Content 3',
    tags: ['tag1', 'tag2'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

async function main() {
  const createdPosts = [];
  for (const post of posts) {
    const createdPost = await prisma.post.upsert({
      where: { id: post.id },
      update: {
        title: post.title,
        content: post.content,
        tags: post.tags,
        createdAt: post.createdAt,
        updatedAt: post.updatedAt,
      },
      create: {
        id: post.id,
        title: post.title,
        content: post.content,
        tags: post.tags,
        createdAt: post.createdAt,
        updatedAt: post.updatedAt,
      },
    });
    createdPosts.push(createdPost);
  }
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
