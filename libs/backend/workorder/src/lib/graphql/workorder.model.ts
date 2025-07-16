import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Workorder {
  @Field(() => Int)
  id!: number;

  @Field()
  productCode!: string;

  @Field()
  clientLocation!: string;

  @Field()
  vendorOrClient!: string;

  @Field(() => Int)
  quantity!: number;

  @Field()
  productWeight!: string;

  @Field()
  deliveryDate!: Date;

  @Field()
  status!: string;

  @Field({ nullable: true })
  description?: string;
}
