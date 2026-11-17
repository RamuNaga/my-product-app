import { GqlModuleOptions } from '@nestjs/graphql';
import { ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { Request, Response } from 'express';

export const graphqlConfig: GqlModuleOptions & ApolloDriverConfig = {
  path: '/graphql', // 👈 add this
  autoSchemaFile: join(process.cwd(), 'dist/schema.gql'),
  sortSchema: true,
  playground: true,
  debug: false,
  installSubscriptionHandlers: true,
  context: ({ req, res }: { req: Request; res: Response }) => ({
    req,
    res,
  }),
};
