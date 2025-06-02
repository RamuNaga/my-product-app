import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, Length } from 'class-validator';
import { BaseCreateInput } from '@my-product-app/backend-shared';

@InputType()
export class CreateProductInput extends BaseCreateInput {
  @Field()
  @IsNotEmpty()
  productcode!: string;

  @Field()
  @IsNotEmpty()
  @Length(2, 100)
  declare name: string;

  @Field({ nullable: true }) // Marking the field as optional
  @IsOptional() // Validator to ensure optionality
  description!: string;
}
