import { ValidateNested } from 'class-validator';
import { CreateUserInput } from '@my-product-app/user';
import { CreateCompanyInput } from '@my-product-app/backend-company';
import { CreateLocationInput } from '@my-product-app/backend-company-location';
import { InputType, Field } from '@nestjs/graphql';
import { Type } from 'class-transformer';

@InputType()
export class RegisterCompanyUserInput {
  @Field(() => CreateCompanyInput)
  @ValidateNested()
  @Type(() => CreateCompanyInput)
  company!: CreateCompanyInput;

  @Field(() => CreateLocationInput)
  @ValidateNested()
  @Type(() => CreateLocationInput)
  location!: CreateLocationInput;

  @Field(() => CreateUserInput)
  @ValidateNested()
  @Type(() => CreateUserInput)
  user!: CreateUserInput;
}
