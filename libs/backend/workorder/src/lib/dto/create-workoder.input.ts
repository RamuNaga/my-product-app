import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateWorkorderInput {
  @Field()
  productId!: number;

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
}
