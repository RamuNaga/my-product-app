import { InputType, Field } from '@nestjs/graphql';
import { IsEnum, IsNotEmpty } from 'class-validator';
import { CompanyType } from '../graphql/company.model';

@InputType()
export class CreateCompanyInput {
  @Field()
  @IsNotEmpty({ message: 'Company name is required' })
  name!: string;

  @Field(() => CompanyType)
  @IsEnum(CompanyType, { message: 'Invalid role' })
  type!: CompanyType;

  @Field()
  @IsNotEmpty({ message: 'Contact is required' })
  contact!: string;
}
