import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as path from 'path';

import { GraphQLConfigModule } from './config/graphql.module';
import { MicroserviceModule } from './config/microservice.module';
import { ProductModule } from '@my-product-app/product';
import { SharedModule } from '@my-product-app/backend-shared';
import { ProductController } from './controllers/product.controller';
import { PingResolver } from './resolvers/ping.resolver';
import { RegistrationModule } from '@my-product-app/backend-registration';
import { WorkorderModule } from '@my-product-app/workorder';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [
        path.resolve(__dirname, '../../../../../.env'), // root .env
      ],
    }),
    SharedModule,
    GraphQLConfigModule,
    RegistrationModule,
    ProductModule,
    WorkorderModule,
    MicroserviceModule,
  ],
  controllers: [ProductController],
  providers: [PingResolver],
})
export class ApiGatewayModule {}
