import { Injectable } from '@nestjs/common';
import { PrismaService } from '@my-product-app/prisma';
import { CreateCompanyInput } from '../dto/create-company.input';
import { Company } from '../graphql/company.model';
import { CompanyType as GQLCompanyType } from '../graphql/company.model';

@Injectable()
export class CompanyService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateCompanyInput) {
    return this.prisma.company.create({ data });
  }

  async searchByName(searchTerm: string): Promise<Company[]> {
    const companies = await this.prisma.company.findMany({
      where: {
        name: {
          contains: searchTerm,
          mode: 'insensitive',
        },
      },
      take: 10,
    });

    // Map the Prisma type to GraphQL type by casting as string enum
    return companies.map((company) => ({
      id: company.id,
      name: company.name,
      type: company.type as unknown as GQLCompanyType,
      contact: company.contact === null ? undefined : company.contact,
    }));
  }
}
