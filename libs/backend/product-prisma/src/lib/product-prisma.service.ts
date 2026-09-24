import { Injectable, OnModuleDestroy, Inject } from '@nestjs/common';
import { PrismaClient } from 'product-prisma-client';
import { PRISMA_PRODUCT } from './product-prisma.provider';

@Injectable()
export class ProductPrismaService implements OnModuleDestroy {
  constructor(
    @Inject(PRISMA_PRODUCT)
    private readonly prisma: PrismaClient
  ) {}

  get client() {
    return this.prisma;
  }

  async onModuleDestroy() {
    await this.prisma.$disconnect();
  }
}
