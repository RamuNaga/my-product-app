import { Field, InputType } from '@nestjs/graphql';
import { ArrayMinSize, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

import { CreateItemInput } from './create-item.input';

@InputType()
export class CreateItemsInput {
  @Field(() => [CreateItemInput])
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => CreateItemInput)
  items!: CreateItemInput[];
}
