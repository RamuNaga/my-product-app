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

  @Field()
  image!: string;

  @Field()
  createdAt!: Date;

  @Field()
  updatedAt!: Date;
}
