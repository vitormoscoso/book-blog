import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Post {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field()
  content: string;

  @Field(() => [String])
  tags: string[];

  @Field()
  createdAt: string;

  @Field()
  updatedAt: string;
}
