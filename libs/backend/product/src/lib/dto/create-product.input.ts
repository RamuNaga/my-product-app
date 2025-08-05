import { InputType, Field, Float } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, Length } from 'class-validator';
import { BaseCreateInput } from '@my-product-app/backend-shared';

@InputType()
export class CreateProductInput extends BaseCreateInput {
  @Field()
  @IsNotEmpty()
  productCode!: string;

  @Field()
  @IsNotEmpty()
  @Length(2, 100)
  declare name: string;

  @Field()
  @IsNotEmpty()
  description!: string;

  @Field({ nullable: true })
  @IsOptional()
  image?: string;

  @Field()
  @IsNotEmpty()
  productWeight!: string;

  @Field(() => Float)
  @IsNotEmpty()
  price!: number;
}
