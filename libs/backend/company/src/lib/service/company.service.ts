import { Injectable } from '@nestjs/common';
import { CreateCompanyInput } from '@my-product-app/backend-graphql-types';
import { Company } from '@my-product-app/backend-graphql-types';
import { CompanyType as GQLCompanyType } from '@my-product-app/backend-shared-types';
import { CompanyPrismaService } from '@my-product-app/backend-company-prisma';

@Injectable()
export class CompanyService {
  constructor(private readonly prisma: CompanyPrismaService) {}

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
      contact: company.contact ?? '',
    }));
  }
}
