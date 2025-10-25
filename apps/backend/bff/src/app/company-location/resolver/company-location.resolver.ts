import { Resolver, Mutation, Args, Query, Int } from '@nestjs/graphql';
import { lastValueFrom } from 'rxjs';

import { CompanyLocationGrpcClientService } from '@my-product-app/backend-company-location';
import {
  CreateLocationInput,
  CompanyLocation,
} from '@my-product-app/backend-graphql-types';
import { BaseGrpcResolver } from '../../resolvers/base.resolver'; // generic base resolver

import {
  CompanyLocationResponse,
  GetAllCompanyLocationsResponse,
} from '@my-product-app/backend-proto/generated';

@Resolver(() => CompanyLocation)
export class CompanyLocationResolver extends BaseGrpcResolver(
  CompanyLocationGrpcClientService
) {
  constructor(
    protected readonly grpcService: CompanyLocationGrpcClientService
  ) {
    super(grpcService);
  }

  /** WorkOrder Create a new company location */
  @Mutation(() => CompanyLocation, { name: 'createCompanyLocation' })
  async createCompanyLocation(
    @Args('createLocationInput') createLocationInput: CreateLocationInput
  ): Promise<CompanyLocationResponse> {
    // ensure required proto fields are provided
    const request = {
      ...createLocationInput,
      contact: createLocationInput.contact ?? '', // default if optional
    };

    return this.handleGrpcCall(this.grpcService.createCompanyLocation(request));
  }

  /** WorkOrder Get all locations for a company */
  @Query(() => [CompanyLocation], { name: 'companyLocations' })
  async getCompanyLocations(
    @Args('companyId', { type: () => Int }) companyId: number
  ): Promise<CompanyLocation[]> {
    const result: GetAllCompanyLocationsResponse = await lastValueFrom(
      this.grpcService.getAllCompanyLocations({ companyId })
    );

    return (result.locations ?? []).map((loc) => ({
      ...loc,
      createdAt: new Date(loc.createdAt),
      updatedAt: new Date(loc.updatedAt),
    }));
  }
}
