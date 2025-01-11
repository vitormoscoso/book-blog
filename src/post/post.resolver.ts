import { Inject } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreatePostInput } from './dto/create-post.input';
import { Post } from './models/post.model';
import { PostService } from './post.service';

@Resolver(() => Post)
export class PostResolver {
  constructor(@Inject(PostService) private readonly postService: PostService) {}

  @Query(() => [Post])
  async posts(): Promise<Post[]> {
    return this.postService.getAllPosts();
  }

  @Query(() => Post)
  async post(@Args('id', { type: () => Number }) id: number): Promise<Post> {
    return this.postService.getPostById(id);
  }

  @Mutation(() => Post)
  async createPost(
    @Args('createPostInput') createPostInput: CreatePostInput,
  ): Promise<Post> {
    return this.postService.createPost(createPostInput);
  }

  @Mutation(() => Post)
  async deletePost(@Args('id', { type: () => Number }) id: number): Promise<Post> {
    return this.postService.deletePost(id);
  }
}
