import { Inject, Injectable, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from 'company-prisma-client';
import { PRISMA_COMPANY } from './company-prisma.provider';

@Injectable()
export class CompanyPrismaService implements OnModuleDestroy {
  constructor(
    @Inject(PRISMA_COMPANY)
    private readonly prisma: PrismaClient
  ) {}

  get client() {
    return this.prisma;
  }

  async onModuleDestroy() {
    await this.prisma.$disconnect();
  }
}
