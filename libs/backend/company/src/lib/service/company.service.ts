import { Injectable } from '@nestjs/common';
import { PrismaService } from '@my-product-app/prisma';
//import { CreateCompanyInput } from '../dto/create-company.input';

@Injectable()
export class CompanyService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: any) {
    return this.prisma.company.create({ data });
  }
}
