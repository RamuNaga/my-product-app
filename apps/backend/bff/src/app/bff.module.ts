import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as path from 'path';
import { SharedModule } from '@my-product-app/backend-shared'; // for JWT or utilities later
import { RegistrationModule } from '@my-product-app/backend-registration'; // business logic
import { GraphQLConfigModule } from './config/graphql.module';
import { PingResolver } from './resolvers/ping.resolver';
import { CompanyLocationGrpcClientModule } from '@my-product-app/backend-company-location';
import { CompanyGrpcClientModule } from '@my-product-app/backend-company';
import { UserGrpcClientModule } from '@my-product-app/user';
import { ProductGrpcClientModule } from '@my-product-app/product';
import { WorkorderModule } from '@my-product-app/workorder';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [path.resolve(__dirname, '../../../../../.env')],
    }),
    SharedModule,
    GraphQLConfigModule,
    RegistrationModule,
    ProductGrpcClientModule,
    UserGrpcClientModule,
    WorkorderModule,
    CompanyGrpcClientModule,
    CompanyLocationGrpcClientModule,
  ],
  controllers: [],
  providers: [PingResolver],
})
export class BffModule {}
