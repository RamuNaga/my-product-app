import { Field, InputType, Int, PartialType, OmitType } from '@nestjs/graphql';
import { IsBoolean, IsInt, IsOptional, Min } from 'class-validator';

import { CreateItemInput } from './create-item.input';

@InputType()
export class UpdateItemInput extends PartialType(
  OmitType(CreateItemInput, ['kind'] as const),
) {
  @Field(() => Int)
  @IsInt()
  @Min(1)
  id!: number;

  @Field({ nullable: true })
  @IsOptional()
  @IsBoolean()
  clearDefaultSupplierId?: boolean;
}
