import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Product } from '@my-product-app/product';
import { User } from '@my-product-app/user';
import { WorkOrderStatus, Priority } from '@my-product-app/backend-shared';
import { Company } from '@my-product-app/backend-company';

@ObjectType()
export class Workorder {
  @Field(() => Int)
  id!: number;

  @Field()
  workOrderCode!: string; // Added missing field

  @Field(() => Product, { nullable: true })
  product?: Product;

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

  @Field(() => User)
  createdBy!: User;

  @Field(() => User, { nullable: true })
  approvedBy?: User;

  @Field(() => Company, { nullable: true })
  company?: Company; // Added company relation

  @Field()
  createdAt!: Date;

  @Field()
  updatedAt!: Date;
}
