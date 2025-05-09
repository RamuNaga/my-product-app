// import { PrismaService } from '@my-product-app/prisma';
// import { Prisma } from '@my-product-app/prisma/generated';

// export interface CursorPaginationArgs {
//   take?: number;
//   cursor?: string;
//   skip?: number;
//   orderBy?: Prisma.Enumerable<Prisma.SortOrder>;
// }

// export interface PaginatedResponse<T> {
//   data: T[];
//   hasNextPage: boolean;
//   hasPreviousPage: boolean;
//   totalCount: number;
//   endCursor: string | null;
//   startCursor: string | null;
// }

// export async function prismaCursorPagination<T>({
//   prismaService,
//   modelName,
//   args,
//   idField = 'id',
// }: {
//   prismaService: PrismaService;
//   modelName: keyof PrismaService;
//   args: {
//     take?: number;
//     cursor?: { [key: string]: any };
//     skip?: number;
//     where?: any;
//     orderBy?: any;
//   };
//   idField?: string;
// }): Promise<PaginatedResponse<T>> {
//   const modelDelegate = prismaService[modelName]; // Dynamically access the model using the modelName

//   if (!modelDelegate) {
//     throw new Error(`Model ${modelName} not found in PrismaService`);
//   }

//   const take = args.take ?? 10;

//   // Fetch items with an extra item for pagination checking
//   const items = await modelDelegate.findMany({
//     ...args,
//     take: take + 1, // Fetch one extra item to check for next page
//   });

//   // Get the total count of items for pagination information
//   const totalCount = await modelDelegate.count({
//     where: args.where,
//   });

//   const hasNextPage = items.length > take;
//   const paginatedItems = hasNextPage ? items.slice(0, -1) : items;

//   const startCursor = paginatedItems.length ? paginatedItems[0][idField] : null;
//   const endCursor = paginatedItems.length
//     ? paginatedItems[paginatedItems.length - 1][idField]
//     : null;

//   return {
//     data: paginatedItems,
//     totalCount,
//     hasNextPage,
//     hasPreviousPage: !!args.cursor,
//     startCursor,
//     endCursor,
//   };
// }
