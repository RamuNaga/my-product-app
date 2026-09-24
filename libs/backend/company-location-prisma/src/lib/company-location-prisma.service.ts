import { Inject, Injectable, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from 'company-location-prisma-client';
import { PRISMA_COMPANY_LOCATION } from './company-location-prisma.provider';

@Injectable()
export class CompanyLocationPrismaService implements OnModuleDestroy {
  constructor(
    @Inject(PRISMA_COMPANY_LOCATION)
    private readonly prisma: PrismaClient
  ) {}

  get client() {
    return this.prisma;
  }

  async onModuleDestroy() {
    await this.prisma.$disconnect();
  }
}
