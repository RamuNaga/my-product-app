import { ObjectType, Field, Int } from '@nestjs/graphql';
import { WorkOrder } from './workorder.model';

@ObjectType()
export class WorkordersResponse {
  @Field(() => [WorkOrder])
  workorders!: WorkOrder[];

  @Field(() => Int)
  total!: number;
}
