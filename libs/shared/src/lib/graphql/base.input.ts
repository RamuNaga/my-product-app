import { Field, InputType, ID } from '@nestjs/graphql';

@InputType()
export abstract class BaseCreateInput {
  // Add shared create fields here if needed
}

@InputType()
export abstract class BaseUpdateInput {
  @Field(() => ID)
  id!: number; // required for updates
}
