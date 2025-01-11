import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreatePostInput } from './dto/create-post.input';
import { Post } from './models/post.model';

@Injectable()
export class PostService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllPosts() {
    return this.prisma.post.findMany();
  }

  async getPostById(id: number) {
    return this.prisma.post.findUnique({ where: { id } });
  }

  async createPost(createPostInput: CreatePostInput): Promise<Post> {
    const { title, content, tags } = createPostInput;
    return this.prisma.post.create({
      data: { title, content, tags },
    });
  }

  async deletePost(id: number): Promise<Post> {
    return this.prisma.post.delete({ where: { id } });
  }
}
