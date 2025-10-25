import { InputType, Field, Int } from '@nestjs/graphql';
import {
  WorkOrderStatus,
  Priority,
} from '@my-product-app/backend-shared-types';

@InputType()
export class ApproveWorkorderInput {
  @Field(() => Int)
  id!: number; // Workorder ID

  @Field(() => Priority, { nullable: true })
  priority?: Priority;

  @Field(() => [String], { nullable: true })
  attachments?: string[];

  @Field({ nullable: true })
  assignedTo?: string;

  @Field({ nullable: true })
  comments?: string;

  @Field(() => WorkOrderStatus)
  status!: WorkOrderStatus;

  // Remove workOrderCode so it's not part of update
  workOrderCode?: never;
}
