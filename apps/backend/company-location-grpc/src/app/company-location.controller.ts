import { Controller, UseFilters } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

import {
  CreateCompanyLocationRequest,
  CompanyLocationResponse,
  GetAllCompanyLocationsRequest,
  GetAllCompanyLocationsResponse,
} from '@my-product-app/backend-proto/generated';
import { Int32Value } from '@my-product-app/backend-proto/generated';
import { CompanyLocationGrpcService } from './company-location.service';
import { GrpcExceptionFilter } from '@my-product-app/backend-shared';
@UseFilters(GrpcExceptionFilter)
@Controller()
export class CompanyLocationGrpcController {
  constructor(private readonly locationService: CompanyLocationGrpcService) {}

  @GrpcMethod('CompanyLocationService', 'CreateCompanyLocation')
  createCompanyLocation(
    data: CreateCompanyLocationRequest
  ): Promise<CompanyLocationResponse> {
    return this.locationService.createCompanyLocation(data);
  }

  @GrpcMethod('CompanyLocationService', 'GetCompanyLocationById')
  getCompanyLocationById(data: Int32Value): Promise<CompanyLocationResponse> {
    return this.locationService.getCompanyLocationById(data.value);
  }

  @GrpcMethod('CompanyLocationService', 'GetAllCompanyLocations')
  getAllCompanyLocations(
    data: GetAllCompanyLocationsRequest
  ): Promise<GetAllCompanyLocationsResponse> {
    return this.locationService.getAllCompanyLocations(data);
  }
}
