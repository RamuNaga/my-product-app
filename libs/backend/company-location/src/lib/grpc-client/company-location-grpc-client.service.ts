import { Injectable, Inject, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';

import {
  CompanyLocationServiceClient,
  CreateCompanyLocationRequest,
  CompanyLocationResponse,
  GetAllCompanyLocationsRequest,
  GetAllCompanyLocationsResponse,
  COMPANY_LOCATION_SERVICE_NAME,
} from '@my-product-app/backend-proto/generated';

import { CreateLocationInput } from '@my-product-app/backend-graphql-types';

@Injectable()
export class CompanyLocationGrpcClientService implements OnModuleInit {
  private companyLocationService!: CompanyLocationServiceClient;

  constructor(
    @Inject('COMPANY_LOCATION_SERVICE') private readonly client: ClientGrpc
  ) {}

  /**  Called once when module initializes */
  onModuleInit() {
    this.companyLocationService =
      this.client.getService<CompanyLocationServiceClient>(
        COMPANY_LOCATION_SERVICE_NAME
      );
  }

  /**  Create a new company location */
  createCompanyLocation(
    input: CreateLocationInput
  ): Observable<CompanyLocationResponse> {
    const request: CreateCompanyLocationRequest = {
      ...input,
      contact: input.contact ?? '',
    };
    return this.companyLocationService.createCompanyLocation(request);
  }

  /**  Get all company locations (with optional filters) */
  getAllCompanyLocations(
    request: GetAllCompanyLocationsRequest
  ): Observable<GetAllCompanyLocationsResponse> {
    return this.companyLocationService.getAllCompanyLocations(request);
  }
}
