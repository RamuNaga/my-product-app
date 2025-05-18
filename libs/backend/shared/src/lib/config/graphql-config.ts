import { GqlModuleOptions } from '@nestjs/graphql';
import { ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { Request } from 'express';

export const graphqlConfig: GqlModuleOptions & ApolloDriverConfig = {
  autoSchemaFile: join(process.cwd(), 'dist/schema.gql'),
  sortSchema: true,
  playground: true,
  debug: false,
  installSubscriptionHandlers: true,
  context: ({ req }: { req: Request }) => ({ req }),
};
