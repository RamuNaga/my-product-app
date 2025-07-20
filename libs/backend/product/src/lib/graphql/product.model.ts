import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Product {
  @Field(() => Int)
  id!: number;

  @Field()
  productcode!: string;

  @Field()
  name!: string;

  @Field()
  description!: string;

  @Field(() => String, { nullable: true })
  image?: string | null;

  @Field()
  createdAt!: Date;

  @Field()
  updatedAt!: Date;
}
