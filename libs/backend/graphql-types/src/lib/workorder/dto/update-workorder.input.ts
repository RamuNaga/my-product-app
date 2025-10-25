import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreateWorkorderInput } from './create-workoder.input';
import {
  WorkOrderStatus,
  Priority,
} from '@my-product-app/backend-shared-types';

@InputType()
export class UpdateWorkorderInput extends PartialType(CreateWorkorderInput) {
  @Field(() => Int)
  id!: number;

  @Field(() => Priority, { nullable: true })
  priority?: Priority;

  @Field(() => [String], { nullable: true })
  attachments?: string[];

  @Field({ nullable: true })
  assignedTo?: string;

  @Field({ nullable: true })
  comments?: string;

  @Field(() => WorkOrderStatus)
  status!: WorkOrderStatus; // APPROVED or REJECTED

  // Remove workOrderCode so it's not part of update
  workOrderCode?: never;
}
