import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { lastValueFrom } from 'rxjs';

import {
  CreateCompanyInput,
  Company,
} from '@my-product-app/backend-graphql-types';
import { BaseGrpcResolver } from '../../resolvers/base.resolver';
import { CompanyGrpcClientService } from '@my-product-app/backend-company';

import {
  CompanyResponse,
  SearchCompanyByNameResponse,
} from '@my-product-app/backend-proto/generated';

@Resolver(() => Company)
export class CompanyResolver extends BaseGrpcResolver(
  CompanyGrpcClientService
) {
  constructor(protected readonly grpcService: CompanyGrpcClientService) {
    super(grpcService);
  }

  /**  Create a new company */
  @Mutation(() => Company, { name: 'createCompany' })
  async createCompany(
    @Args('createCompanyInput') createCompanyInput: CreateCompanyInput
  ): Promise<CompanyResponse> {
    const result = await this.handleGrpcCall(
      this.grpcService.createCompany(createCompanyInput)
    );
    return result;
  }

  /**  Search companies by name */
  @Query(() => [Company], { name: 'searchCompanies' })
  async searchCompanies(
    @Args('searchTerm') searchTerm: string
  ): Promise<SearchCompanyByNameResponse> {
    const result = await lastValueFrom(
      this.grpcService.searchByName({ searchTerm })
    );

    return result;
  }
}
