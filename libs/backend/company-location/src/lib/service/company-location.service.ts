import { Injectable } from '@nestjs/common';
import { CreateLocationInput } from '../dto/create-location.input';
import { PrismaService } from '@my-product-app/prisma';

@Injectable()
export class CompanyLocationService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateLocationInput) {
    return this.prisma.companyLocation.create({
      data,
    });
  }

  async getAllLocations(companyId: number) {
    return this.prisma.companyLocation.findMany({
      where: { companyId },
      select: { id: true, location: true }, // select only needed fields
      orderBy: { location: 'asc' },
    });
  }
}
