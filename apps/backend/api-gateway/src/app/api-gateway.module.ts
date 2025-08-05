import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as path from 'path';

import { GraphQLConfigModule } from './config/graphql.module';
import { MicroserviceModule } from './config/microservice.module';
import { ProductModule } from '@my-product-app/product';
import { UserModule } from '@my-product-app/user';
import { CompanyModule } from '@my-product-app/backend-company';
import { SharedModule } from '@my-product-app/backend-shared';
import { ProductController } from './controllers/product.controller';
import { PingResolver } from './resolvers/ping.resolver';
import { CompanyLocationModule } from '@my-product-app/backend-company-location';
import { RegistrationModule } from '@my-product-app/backend-registration';

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
    ProductModule,
    UserModule,
    CompanyModule,
    CompanyLocationModule,
    RegistrationModule,
    MicroserviceModule,
  ],
  controllers: [ProductController],
  providers: [PingResolver],
})
export class ApiGatewayModule {}
