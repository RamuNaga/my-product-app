import { PrismaClient } from '@my-product-app/backend-prisma/workorder-client';
import { PrismaPg } from '@prisma/adapter-pg';

export const PRISMA_WORKORDER = Symbol('PRISMA_WORKORDER');

function createPrismaClient() {
  const connectionString = process.env['DATABASE_URL_WORKORDER'];

  if (!connectionString) {
    throw new Error('DATABASE_URL_WORKORDER is not defined');
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
            `[Workorder Prisma] ${String(model)}.${String(
              operation
            )} ${duration}ms`
          );

          return result;
        },
      },
    },
  });
}

export const workorderPrismaProvider = {
  provide: PRISMA_WORKORDER,
  useFactory: () => createPrismaClient(),
};
