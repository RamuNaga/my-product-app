// registration.model.ts
import { ObjectType, Field } from '@nestjs/graphql';

import { User } from '@my-product-app/user';
import { Company } from '@my-product-app/backend-company';
import { CompanyLocation } from '@my-product-app/backend-company-location';

@ObjectType()
export class RegisterCompanyUserPayload {
  @Field(() => User)
  user!: User;

  @Field(() => Company)
  company!: Company;

  @Field(() => CompanyLocation)
  location!: CompanyLocation;
}
