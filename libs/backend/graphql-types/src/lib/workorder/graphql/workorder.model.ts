import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  WorkOrderStatus,
  Priority,
} from '@my-product-app/backend-shared-types';

@ObjectType()
export class WorkOrder {
  @Field(() => Int)
  id!: number;

  @Field()
  workOrderCode!: string;

  @Field(() => Int)
  productId!: number;

  @Field()
  clientLocation!: string;

  @Field()
  vendorOrClient!: string;

  @Field(() => Int)
  quantity!: number;

  @Field({ nullable: true })
  description?: string;

  @Field()
  deliveryDate!: Date;

  @Field(() => WorkOrderStatus)
  status!: WorkOrderStatus;

  @Field(() => Priority, { nullable: true })
  priority?: Priority;

  @Field(() => [String], { nullable: 'itemsAndList' })
  attachments?: string[];

  @Field({ nullable: true })
  assignedTo?: string;

  @Field({ nullable: true })
  comments?: string;

  @Field(() => Int)
  createdById!: number;

  @Field(() => Int, { nullable: true })
  approvedById?: number;

  @Field(() => Int, { nullable: true })
  companyId?: number;

  @Field()
  createdAt!: Date;

  @Field()
  updatedAt!: Date;
}
