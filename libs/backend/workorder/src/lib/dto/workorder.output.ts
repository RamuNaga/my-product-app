import { ObjectType, Field, Int } from '@nestjs/graphql';
import { WorkOrderStatus, Priority } from '@my-product-app/backend-shared';

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

  @Field(() => WorkOrderStatus)
  status!: WorkOrderStatus;

  @Field(() => Priority, { nullable: true })
  priority?: Priority;
}
