import { ObjectType, Field, Int, Float } from '@nestjs/graphql';

@ObjectType()
export class Product {
  @Field(() => Int)
  id!: number;

  @Field()
  productCode!: string;

  @Field()
  name!: string;

  @Field()
  description!: string;

  @Field()
  productWeight!: string;

  @Field(() => Float)
  price!: number;

  @Field(() => String, { nullable: true })
  image?: string | null;

  @Field(() => Int, { nullable: true })
  companyId?: number | null;

  @Field()
  createdAt!: Date;

  @Field()
  updatedAt!: Date;
}
