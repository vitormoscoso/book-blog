import { Query, Resolver } from '@nestjs/graphql';
import { Post } from './models/post.model';

const posts = [
  {
    id: '1',
    title: 'Post 1',
    content: 'Content 1',
    tags: ['tag1', 'tag2'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '2',
    title: 'Post 2',
    content: 'Content 2',
    tags: ['tag1', 'tag2'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '3',
    title: 'Post 3',
    content: 'Content 3',
    tags: ['tag1', 'tag2'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

@Resolver(() => Post)
export class PostResolver {
    @Query(() => [Post])
    async posts(): Promise<Post[]> {
        return posts;
    }
}
