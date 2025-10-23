import { Injectable, Inject, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';

import {
  CompanyServiceClient,
  CreateCompanyRequest,
  CompanyResponse,
  SearchCompanyByNameRequest,
  SearchCompanyByNameResponse,
  COMPANY_SERVICE_NAME,
} from '@my-product-app/backend-proto/generated';

import { CreateCompanyInput } from '@my-product-app/backend-graphql-types';
import { mapGraphQLCompanyTypeToProto } from '@my-product-app/backend-shared'; // if you have type mapping utils

@Injectable()
export class CompanyGrpcClientService implements OnModuleInit {
  private companyService!: CompanyServiceClient;

  constructor(@Inject('COMPANY_SERVICE') private readonly client: ClientGrpc) {}

  /** Called once when module is initialized */
  onModuleInit() {
    this.companyService =
      this.client.getService<CompanyServiceClient>(COMPANY_SERVICE_NAME);
  }

  /**  Create new company */
  createCompany(input: CreateCompanyInput): Observable<CompanyResponse> {
    const request: CreateCompanyRequest = {
      ...input,
      type: mapGraphQLCompanyTypeToProto(input.type),
    };
    return this.companyService.createCompany(request);
  }

  /**  Get company by ID */
  getCompanyById(id: number): Observable<CompanyResponse> {
    // google.protobuf.Int32Value equivalent for wrapping primitives
    return this.companyService.getCompanyById({ value: id });
  }

  /**  Search company by name (supports partial or exact matching) */
  searchByName(
    request: SearchCompanyByNameRequest
  ): Observable<SearchCompanyByNameResponse> {
    return this.companyService.searchByName(request);
  }
}
