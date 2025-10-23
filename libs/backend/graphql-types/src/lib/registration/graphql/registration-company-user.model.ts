// registration.model.ts
import { ObjectType, Field } from '@nestjs/graphql';
import { User } from '../../user/graphql/user.model';
import { Company } from '../../company/graphql/company.model';
import { CompanyLocation } from '../../company-location/graphql/company-location.model';

@ObjectType()
export class RegisterCompanyUserPayload {
  @Field(() => User)
  user!: User;

  @Field(() => Company)
  company!: Company;

  @Field(() => CompanyLocation)
  location!: CompanyLocation;
}
