import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreateWorkorderInput } from './create-workoder.input';

@InputType()
export class UpdateWorkorderInput extends PartialType(CreateWorkorderInput) {
  @Field(() => Int)
  id!: number;
}
