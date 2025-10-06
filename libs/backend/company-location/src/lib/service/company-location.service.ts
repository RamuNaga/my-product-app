import { Injectable } from '@nestjs/common';
import { CreateLocationInput } from '../dto/create-location.input';
import { CompanyLocationPrismaService } from '@my-product-app/backend-prisma/company-location-prisma';

@Injectable()
export class CompanyLocationService {
  constructor(private readonly prisma: CompanyLocationPrismaService) {}

  async create(data: CreateLocationInput) {
    return this.prisma.companyLocation.create({
      data,
    });
  }

  async getAllCompanyLocations(companyId: number) {
    return this.prisma.companyLocation.findMany({
      where: { companyId },
      select: { id: true, location: true }, // select only needed fields
      orderBy: { location: 'asc' },
    });
  }
}
