import { Injectable } from '@nestjs/common';
import { PrismaService } from '@my-product-app/backend/prisma'; // adjust path as needed
import { CreateCompanyInput } from '../dto/create-company.input';

@Injectable()
export class CompanyService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateCompanyInput) {
    return this.prisma.company.create({ data });
  }
}
