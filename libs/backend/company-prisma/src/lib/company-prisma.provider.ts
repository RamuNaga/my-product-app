import { PrismaClient } from '@my-product-app/backend-prisma/company-client';
import { PrismaPg } from '@prisma/adapter-pg';

export const PRISMA_COMPANY = Symbol('PRISMA_COMPANY');

function createPrismaClient() {
  const connectionString = process.env['DATABASE_URL_COMPANY'];

  if (!connectionString) {
    throw new Error('DATABASE_URL_COMPANY is not defined');
  }

  const adapter = new PrismaPg({
    connectionString,
  });

  const client = new PrismaClient({
    adapter,
  });

  return client.$extends({
    query: {
      $allModels: {
        async $allOperations({ model, operation, args, query }) {
          const start = Date.now();

          const result = await query(args);

          const duration = Date.now() - start;

          console.log(
            `[Company Prisma] ${String(model)}.${String(
              operation
            )} ${duration}ms`
          );

          return result;
        },
      },
    },
  });
}

export const companyPrismaProvider = {
  provide: PRISMA_COMPANY,
  useFactory: () => createPrismaClient(),
};
