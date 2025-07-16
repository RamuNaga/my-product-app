import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateWorkorderInput {
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
}
