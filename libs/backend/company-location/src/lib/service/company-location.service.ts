import { Injectable } from '@nestjs/common';
import { CreateLocationInput } from '@my-product-app/backend-graphql-types';
import { CompanyLocationPrismaService } from '@my-product-app/backend-prisma/company-location-prisma';

@Injectable()
export class CompanyLocationService {
  constructor(private readonly prisma: CompanyLocationPrismaService) {}

  async create(data: CreateLocationInput) {
    return this.prisma.client.companyLocation.create({
      data,
    });
  }

  async getAllCompanyLocations(companyId: number) {
    return this.prisma.client.companyLocation.findMany({
      where: { companyId },
      select: { id: true, location: true }, // select only needed fields
      orderBy: { location: 'asc' },
    });
  }
}
