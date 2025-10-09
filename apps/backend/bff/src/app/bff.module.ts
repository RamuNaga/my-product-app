import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as path from 'path';
import { SharedModule } from '@my-product-app/backend-shared'; // for JWT or utilities later
import { RegistrationModule } from '@my-product-app/backend-registration'; // business logic
import { RegistrationGrpcController } from './registration/registration-grpc.controller';
import { GraphQLConfigModule } from './config/graphql.module';
import { PingResolver } from './resolvers/ping.resolver';
import { ProductModule } from '@my-product-app/product';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [path.resolve(__dirname, '../../../../../.env')],
    }),
    SharedModule,
    GraphQLConfigModule,
    RegistrationModule,
    ProductModule,
  ],
  controllers: [RegistrationGrpcController],
  providers: [PingResolver],
})
export class BffModule {}
