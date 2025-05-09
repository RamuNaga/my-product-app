import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, Length } from 'class-validator';

@InputType()
export class CreateProductInput {
  @Field()
  @IsNotEmpty()
  productcode!: string;

  @Field()
  @IsNotEmpty()
  @Length(2, 100)
  name!: string;

  @Field()
  description!: string;
}
