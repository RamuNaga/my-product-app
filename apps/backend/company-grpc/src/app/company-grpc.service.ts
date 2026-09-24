import { Injectable } from '@nestjs/common';
import { CompanyPrismaService } from '@my-product-app/backend-prisma/company-prisma';
import {
  CreateCompanyRequest,
  CompanyResponse,
  SearchCompanyByNameRequest,
  SearchCompanyByNameResponse,
} from '@my-product-app/backend-proto/generated';
import {
  mapProtoCompanyTypeToGraphQL,
  mapGraphQLCompanyTypeToProto,
} from '@my-product-app/backend-shared-mappers';

@Injectable()
export class CompanyGrpcService {
  constructor(private readonly prisma: CompanyPrismaService) {}

  async createCompany(data: CreateCompanyRequest): Promise<CompanyResponse> {
    // Map ProtoCompanyType → GraphQLCompanyType (if needed for internal logic)
    const mappedType = mapProtoCompanyTypeToGraphQL(data.type);

    // Create company in DB
    const company = await this.prisma.client.company.create({
      data: {
        name: data.name,
        type: mappedType, // store as GraphQL enum internally
        contact: data.contact ?? '',
      },
    });

    // Return as Proto type
    return {
      company: {
        id: company.id,
        name: company.name,
        type: mapGraphQLCompanyTypeToProto(
          company.type as unknown as import('@my-product-app/backend-shared-types').CompanyType
        ), // map back to Proto enum
        contact: company.contact ?? '',
        createdAt: company.createdAt.toISOString(),
        updatedAt: company.updatedAt.toISOString(),
      },
    };
  }

  async getCompanyById(id: number): Promise<CompanyResponse> {
    const company = await this.prisma.client.company.findUnique({
      where: { id },
    });

    if (!company) {
      throw new Error(`Company with id ${id} not found`);
    }

    return {
      company: {
        id: company.id,
        name: company.name,
        type: mapGraphQLCompanyTypeToProto(
          company.type as unknown as import('@my-product-app/backend-shared-types').CompanyType
        ),
        contact: company.contact ?? '',
        createdAt: company.createdAt.toISOString(),
        updatedAt: company.updatedAt.toISOString(),
      },
    };
  }

  async searchByName(
    data: SearchCompanyByNameRequest
  ): Promise<SearchCompanyByNameResponse> {
    const companies = await this.prisma.client.company.findMany({
      where: {
        name: {
          contains: data.searchTerm,
          mode: 'insensitive',
        },
      },
      take: 10,
    });

    return {
      companies: companies.map((company) => ({
        id: company.id,
        name: company.name,
        type: mapGraphQLCompanyTypeToProto(
          company.type as unknown as import('@my-product-app/backend-shared-types').CompanyType
        ),
        contact: company.contact ?? '',
        createdAt: company.createdAt.toISOString(),
        updatedAt: company.updatedAt.toISOString(),
      })),
    };
  }
}
