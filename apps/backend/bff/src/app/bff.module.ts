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
import { WorkOrderGrpcClientModule } from '@my-product-app/workorder';
import { CompanyLocationResolver } from './company-location/resolver/company-location.resolver';
import { UserResolver } from './user/resolver/user.resolver';
import { CompanyResolver } from './company/resolver/company.resolver';
import { ProductResolver } from './product/resolver/product.resolver';
import { WorkorderResolver } from './workorder/resolver/workorder.resolver';
import { RegistrationResolver } from './registration/resolver/registration.resolver';

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
    CompanyGrpcClientModule,
    WorkOrderGrpcClientModule,
    CompanyLocationGrpcClientModule,
  ],
  controllers: [],
  providers: [
    PingResolver,
    CompanyLocationResolver,
    UserResolver,
    CompanyResolver,
    ProductResolver,
    WorkorderResolver,
    RegistrationResolver,
  ],
})
export class BffModule {}
