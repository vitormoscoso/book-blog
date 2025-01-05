import { Inject } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { Post } from './models/post.model';
import { PostService } from './post.service';

@Resolver(() => Post)
export class PostResolver {
  constructor(@Inject(PostService) private readonly postService: PostService) {}

  @Query(() => [Post])
  async posts(): Promise<Post[]> {
    return this.postService.getAllPosts();
  }
}
