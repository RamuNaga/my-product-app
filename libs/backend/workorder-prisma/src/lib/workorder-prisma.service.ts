import { Inject, Injectable, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@my-product-app/backend-prisma/workorder-client';
import { PRISMA_WORKORDER } from './workorder-primsa.provider';

@Injectable()
export class WorkorderPrismaService implements OnModuleDestroy {
  constructor(
    @Inject(PRISMA_WORKORDER)
    private readonly prisma: PrismaClient
  ) {}

  get client() {
    return this.prisma;
  }

  async onModuleDestroy() {
    await this.prisma.$disconnect();
  }
}
