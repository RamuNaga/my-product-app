import { InputType, Field, Float } from '@nestjs/graphql';
import { IsInt, IsNotEmpty, IsOptional, Length } from 'class-validator';
import { BaseCreateInput } from '@my-product-app/backend-shared';
import { Type } from 'class-transformer';

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

  @Field({ nullable: true })
  @IsInt()
  @Type(() => Number)
  companyId?: number;
}
