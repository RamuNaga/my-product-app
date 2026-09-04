import { PrismaClient } from 'product-prisma-client';
import { PrismaPg } from '@prisma/adapter-pg';

export const PRISMA_PRODUCT = Symbol('PRISMA_PRODUCT');

function createPrismaClient() {
  const connectionString = process.env['DATABASE_URL_PRODUCT'];

  if (!connectionString) {
    throw new Error('DATABASE_URL_PRODUCT is not defined');
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
            `[Prisma] ${String(model)}.${String(operation)} ${duration}ms`
          );

          return result;
        },
      },
    },
  });
}

export const productPrismaProvider = {
  provide: PRISMA_PRODUCT,
  useFactory: () => createPrismaClient(),
};
