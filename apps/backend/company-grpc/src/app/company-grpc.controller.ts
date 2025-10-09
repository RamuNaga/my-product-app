import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { CompanyGrpcService } from './company-grpc.service';
import {
  CreateCompanyRequest,
  CompanyResponse,
  SearchCompanyByNameRequest,
  SearchCompanyByNameResponse,
} from '@my-product-app/backend-proto/generated';
import { Int32Value } from '@my-product-app/backend-proto/generated';

@Controller()
export class CompanyGrpcController {
  constructor(private readonly companyService: CompanyGrpcService) {}

  @GrpcMethod('CompanyService', 'CreateCompany')
  createCompany(data: CreateCompanyRequest): Promise<CompanyResponse> {
    return this.companyService.createCompany(data);
  }

  @GrpcMethod('CompanyService', 'GetCompanyById')
  getCompanyById(data: Int32Value): Promise<CompanyResponse> {
    return this.companyService.getCompanyById(data.value);
  }

  @GrpcMethod('CompanyService', 'SearchByName')
  searchByName(
    data: SearchCompanyByNameRequest
  ): Promise<SearchCompanyByNameResponse> {
    return this.companyService.searchByName(data);
  }
}
