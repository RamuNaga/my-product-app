import { InputType, Field } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ValidateNested, IsOptional, IsInt } from 'class-validator';
import { CreateCompanyInput } from '../../company/dto/create-company.input';
import { CreateLocationInput } from '../../company-location/dto/create-location.input';
import { CreateUserInput } from '../../user/dto/create-user.input';

@InputType()
export class RegisterCompanyUserInput {
  @Field(() => CreateCompanyInput, { nullable: true })
  @ValidateNested()
  @Type(() => CreateCompanyInput)
  @IsOptional()
  company?: CreateCompanyInput;

  @Field(() => CreateLocationInput, { nullable: true })
  @ValidateNested()
  @Type(() => CreateLocationInput)
  @IsOptional()
  location?: CreateLocationInput;

  @Field(() => CreateUserInput)
  @ValidateNested()
  @Type(() => CreateUserInput)
  user!: CreateUserInput;

  @Field(() => Number, { nullable: true })
  @IsOptional()
  @IsInt()
  existingCompanyId?: number;
}
