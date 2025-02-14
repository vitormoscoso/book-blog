import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Post {
  @Field(() => ID)
  id: number;

  @Field()
  title: string;

  @Field()
  content: string;

  @Field(() => [String])
  tags: string[];

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
