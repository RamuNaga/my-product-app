// company.model.ts
import { ObjectType, Field, Int, registerEnumType } from '@nestjs/graphql';

export enum CompanyType {
  MANUFACTURER = 'MANUFACTURER',
  CLIENT = 'CLIENT',
  SUPPLIER = 'SUPPLIER',
}

registerEnumType(CompanyType, {
  name: 'CompanyType',
  description: 'Type of company',
});

@ObjectType()
export class Company {
  @Field(() => Int)
  id!: number;

  @Field()
  name!: string;

  @Field(() => CompanyType)
  type!: CompanyType;

  @Field({ nullable: true })
  contact?: string;
}
