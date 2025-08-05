import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreateCompanyInput {
  @Field()
  @IsNotEmpty({ message: 'Company name is required' })
  name!: string;

  @Field()
  @IsNotEmpty({ message: 'Company type is required' })
  type!: string;

  @Field()
  @IsNotEmpty({ message: 'Contact is required' })
  contact!: string;
}
