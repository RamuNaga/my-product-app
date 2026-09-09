import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { lastValueFrom } from 'rxjs';

import {
  CreateCompanyInput,
  Company,
} from '@my-product-app/backend-graphql-types';
import { BaseGrpcResolver } from '../../resolvers/base.resolver';
import { CompanyGrpcClientService } from '@my-product-app/company-grpc-client';

import { CompanyResponse } from '@my-product-app/backend-proto/generated';
import { mapProtoCompanyTypeToGraphQL } from '@my-product-app/backend-shared-mappers';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '@my-product-app/backend-shared';
@UseGuards(JwtAuthGuard)
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
    console.log('Mutation Resolver createCompany Received CreateCompanyInput:', createCompanyInput);
    const result = await this.handleGrpcCall(
      this.grpcService.createCompany(createCompanyInput)
    );
    console.log('Mutation Resolver createCompany Received result:', result);
    return result;
  }

  /**  Search companies by name */
  @Query(() => [Company], { name: 'searchCompanies' })
  async searchCompanies(
    @Args('searchTerm') searchTerm: string
  ): Promise<Company[]> {
    const result = await lastValueFrom(
      this.grpcService.searchByName({ searchTerm })
    );

    // Map each ProtoCompany → GraphQLCompany
    return result.companies.map((company) => ({
      id: company.id,
      name: company.name,
      type: mapProtoCompanyTypeToGraphQL(company.type),
      contact: company.contact,
      createdAt: company.createdAt,
      updatedAt: company.updatedAt,
    }));
  }
}
