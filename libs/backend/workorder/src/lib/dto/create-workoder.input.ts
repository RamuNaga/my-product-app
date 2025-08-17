import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateWorkorderInput {
  @Field(() => Int)
  productId!: number;

  @Field()
  clientLocation!: string;

  @Field()
  vendorOrClient!: string;

  @Field(() => Int)
  quantity!: number;

  @Field()
  deliveryDate!: Date;

  @Field({ nullable: true })
  description?: string;
}
