import { Injectable, Inject, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

import { RegisterCompanyUserInput } from '@my-product-app/backend-graphql-types';

import {
  USER_SERVICE,
  COMPANY_SERVICE,
  COMPANY_LOCATION_SERVICE,
} from '@my-product-app/backend-shared';

import {
  UserServiceClient,
  CreateUserRequest,
  CreateUserResponse,
  CompanyServiceClient,
  CreateCompanyRequest,
  CompanyResponse,
  CompanyLocationServiceClient,
  CreateCompanyLocationRequest,
  CompanyLocationResponse,
} from '@my-product-app/backend-proto/generated';

import { mapGraphQLUserRoleToProto } from '@my-product-app/backend-shared-mappers';
import { mapGraphQLCompanyTypeToProto } from '@my-product-app/backend-shared-mappers';

@Injectable()
export class RegistrationService implements OnModuleInit {
  private userService!: UserServiceClient;
  private companyService!: CompanyServiceClient;
  private companyLocationService!: CompanyLocationServiceClient;

  constructor(
    @Inject(USER_SERVICE) private readonly userClient: ClientGrpc,
    @Inject(COMPANY_SERVICE) private readonly companyClient: ClientGrpc,
    @Inject(COMPANY_LOCATION_SERVICE)
    private readonly companyLocationClient: ClientGrpc
  ) {}

  onModuleInit() {
    this.userService =
      this.userClient.getService<UserServiceClient>('UserService');
    this.companyService =
      this.companyClient.getService<CompanyServiceClient>('CompanyService');
    this.companyLocationService =
      this.companyLocationClient.getService<CompanyLocationServiceClient>(
        'CompanyLocationService'
      );
  }

  async registerCompanyUser(dto: RegisterCompanyUserInput): Promise<boolean> {
    let companyId: number;
    let companyRes: CompanyResponse | undefined;
    let locationRes: CompanyLocationResponse | undefined;

    // Create company if not existing
    if (dto.existingCompanyId) {
      companyId = dto.existingCompanyId;
    } else {
      if (!dto.company || !dto.location)
        throw new Error('Company and location data required');

      companyRes = await lastValueFrom(
        this.companyService.createCompany({
          ...dto.company,
          type: mapGraphQLCompanyTypeToProto(dto.company.type),
        } as CreateCompanyRequest)
      );
      // Assert that companyRes and companyRes.company exist
      if (!companyRes?.company?.id) throw new Error('Company creation failed');
      companyId = companyRes.company.id;

      locationRes = await lastValueFrom(
        this.companyLocationService.createCompanyLocation({
          ...dto.location,
          companyId,
        } as CreateCompanyLocationRequest)
      );
      if (!locationRes?.location?.id)
        throw new Error('Company Location creation failed');
    }

    if (!dto.user.password) throw new Error('Password is required');

    const userRes: CreateUserResponse = await lastValueFrom(
      this.userService.createUser({
        ...dto.user,
        companyId,
        role: mapGraphQLUserRoleToProto(dto.user.role),
      } as CreateUserRequest)
    );

    if (!userRes.id) throw new Error('User creation failed');

    return true;
  }
}
