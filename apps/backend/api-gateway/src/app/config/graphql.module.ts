// graphql.module.ts
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { graphqlConfig } from '@my-product-app/shared';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      ...graphqlConfig, // Use shared GraphQL config
    }),
  ],
  exports: [GraphQLModule],
})
export class GraphQLConfigModule {}
