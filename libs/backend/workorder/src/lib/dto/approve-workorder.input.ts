import { InputType, Field, Int } from '@nestjs/graphql';
import { Priority, WorkOrderStatus } from '@prisma/client';

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
  status!: WorkOrderStatus; // APPROVED or REJECTED
}
