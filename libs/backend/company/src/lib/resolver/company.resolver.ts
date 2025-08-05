import { Resolver, Mutation, Args } from '@nestjs/graphql';

import { CreateCompanyInput } from '../dto/create-company.input';
import { CompanyService } from '../service/company.service';
import { Company } from '../graphql/company.model';

@Resolver('Company')
export class CompanyResolver {
  constructor(private readonly companyService: CompanyService) {}

  @Mutation(() => Company)
  createCompany(
    @Args('createCompanyInput') createCompanyInput: CreateCompanyInput
  ) {
    return this.companyService.create(createCompanyInput);
  }
}
