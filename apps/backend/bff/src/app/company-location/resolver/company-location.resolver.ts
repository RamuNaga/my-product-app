import { Resolver, Mutation, Args, Query, Int } from '@nestjs/graphql';
import { firstValueFrom } from 'rxjs';

import { CompanyLocationGrpcClientService } from '@my-product-app/backend-company-location';
import {
  CreateLocationInput,
  CompanyLocation,
} from '@my-product-app/backend-graphql-types';
import { BaseGrpcResolver } from '../../resolvers/base-user.resolver'; // generic base resolver

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

  /** 🔹 Create a new company location */
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

  /** 🔹 Get all locations for a company */
  @Query(() => [CompanyLocation], { name: 'companyLocations' })
  async getCompanyLocations(
    @Args('companyId', { type: () => Int }) companyId: number
  ): Promise<GetAllCompanyLocationsResponse> {
    const result: GetAllCompanyLocationsResponse = await firstValueFrom(
      this.grpcService.getAllCompanyLocations({ companyId })
    );

    // gRPC likely returns an array field, e.g., `locations`
    return result;
  }
}
