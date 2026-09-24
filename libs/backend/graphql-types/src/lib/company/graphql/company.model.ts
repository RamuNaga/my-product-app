import { ObjectType, Field, Int } from '@nestjs/graphql';
import { CompanyType } from '@my-product-app/backend-shared-types';

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
