import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

/**
 * PrismaService integrates Prisma Client with Nest lifecycle hooks
 * and uses Prisma Client Extensions for logging queries.
 */
@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    super();

    // Add logging via $extends instead of deprecated $use
    this.$extends({
      query: {
        $allModels: {
          async $allOperations({ model, operation, args, query }) {
            console.log(`Prisma action: ${operation} on model: ${model}`);
            return query(args);
          },
        },
      },
    });
  }

  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
