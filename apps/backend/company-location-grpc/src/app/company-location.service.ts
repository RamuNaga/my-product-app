import { Injectable } from '@nestjs/common';
import { CompanyLocationPrismaService } from '@my-product-app/backend-prisma/company-location-prisma';
import {
  CreateCompanyLocationRequest,
  CompanyLocationResponse,
  GetAllCompanyLocationsRequest,
  GetAllCompanyLocationsResponse,
} from '@my-product-app/backend-proto/generated';

@Injectable()
export class CompanyLocationGrpcService {
  constructor(private readonly prisma: CompanyLocationPrismaService) {}

  async createCompanyLocation(
    data: CreateCompanyLocationRequest
  ): Promise<CompanyLocationResponse> {
    const location = await this.prisma.client.companyLocation.create({
      data: {
        ...data,
        contact: data.contact ?? '', // ensure string
        country: data.country ?? '',
        county: data.county ?? '',
        city: data.city ?? '',
        postalCode: data.postalCode ?? '',
      },
    });

    return {
      location: {
        ...location,
        contact: location.contact ?? '',
        county: location.county ?? '',
        createdAt: location.createdAt.toISOString(),
        updatedAt: location.updatedAt.toISOString(),
      },
    };
  }

  async getCompanyLocationById(id: number): Promise<CompanyLocationResponse> {
    const location = await this.prisma.client.companyLocation.findUnique({
      where: { id },
    });
    console.log('Fetched location:', location);
    if (!location) {
      throw new Error(`CompanyLocation with id ${id} not found`);
    }

    return {
      location: {
        ...location,
        contact: location.contact ?? '', // handle null safely

        county: location.county ?? '',
        createdAt: location.createdAt.toISOString(),
        updatedAt: location.updatedAt.toISOString(),
      },
    };
  }

  async getAllCompanyLocations(
    data: GetAllCompanyLocationsRequest
  ): Promise<GetAllCompanyLocationsResponse> {
    const locations = await this.prisma.client.companyLocation.findMany({
      where: { companyId: data.companyId },
      orderBy: { location: 'asc' },
    });

    return {
      locations: locations.map((loc) => ({
        ...loc,
        contact: loc.contact ?? '', // ensure string
        county: loc.county ?? '',
        createdAt: loc.createdAt.toISOString(),
        updatedAt: loc.updatedAt.toISOString(),
      })),
    };
  }
}
