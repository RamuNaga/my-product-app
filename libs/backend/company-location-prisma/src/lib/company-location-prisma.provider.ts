import { PrismaClient } from 'company-location-prisma-client';
import { PrismaPg } from '@prisma/adapter-pg';

export const PRISMA_COMPANY_LOCATION = Symbol('PRISMA_COMPANY_LOCATION');

function createPrismaClient() {
  const connectionString = process.env['DATABASE_URL_COMPANY_LOCATION'];

  if (!connectionString) {
    throw new Error('DATABASE_URL_COMPANY_LOCATION is not defined');
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
            `[Company Location Prisma] ${String(model)}.${String(
              operation
            )} ${duration}ms`
          );

          return result;
        },
      },
    },
  });
}

export const companyLocationPrismaProvider = {
  provide: PRISMA_COMPANY_LOCATION,
  useFactory: () => createPrismaClient(),
};
