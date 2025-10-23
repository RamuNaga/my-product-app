import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Workorder } from './workorder.model';

@ObjectType()
export class WorkordersResponse {
  @Field(() => [Workorder])
  workorders!: Workorder[];

  @Field(() => Int)
  total!: number;
}
