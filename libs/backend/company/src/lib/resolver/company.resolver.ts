import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';

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

  @Query(() => [Company], { name: 'searchCompanies' })
  async searchCompanies(
    @Args('searchTerm') searchTerm: string
  ): Promise<Company[]> {
    return this.companyService.searchByName(searchTerm);
  }
}
