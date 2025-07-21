import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class ApproveWorkorderInput {
  @Field(() => Int)
  id!: number; // Workorder ID to approve/reject

  @Field({ nullable: true })
  priority?: string;

  @Field(() => [String], { nullable: true })
  attachments?: string[];

  @Field({ nullable: true })
  assignedTo?: string;

  @Field({ nullable: true })
  comments?: string;

  @Field()
  status!: string; // e.g. 'Approved' or 'Rejected'
}
