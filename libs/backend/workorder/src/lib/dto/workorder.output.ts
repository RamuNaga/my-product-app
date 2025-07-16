import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class WorkorderOutput {
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

  @Field({ nullable: true })
  description?: string;

  @Field()
  status!: string;
}
