import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@my-product-app/backend-prisma/company-location-client';

@Injectable()
export class CompanyLocationPrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    super();

    if (process.env['NODE_ENV'] !== 'production') {
      this.$extends({
        query: {
          $allModels: {
            async $allOperations({ model, operation, args, query }) {
              const start = Date.now();
              const result = await query(args);
              const duration = Date.now() - start;
              const safeResult =
                JSON.stringify(result).length > 1000
                  ? '[Result too large]'
                  : JSON.stringify(result);

              console.log(
                `[Prisma] ${operation.toUpperCase()} on ${model} | Duration: ${duration}ms | Args: ${JSON.stringify(
                  args
                )} | Result: ${safeResult}`
              );
              return result;
            },
          },
        },
      });
    }
  }

  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
