import { Inject, Injectable, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@my-product-app/backend-prisma/user-client';
import { PRISMA_USER } from './user-prisma.provider';

@Injectable()
export class UserPrismaService implements OnModuleDestroy {
  constructor(
    @Inject(PRISMA_USER)
    private readonly prisma: PrismaClient
  ) {}

  get client() {
    return this.prisma;
  }

  async onModuleDestroy() {
    await this.prisma.$disconnect();
  }
}
