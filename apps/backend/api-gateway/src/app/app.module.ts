import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import * as path from 'path';

import { GraphQLConfigModule } from './config/graphql.module';
import { MicroserviceModule } from './config/microservice.module';
import { ProductModule } from '@my-product-app/product';
import { UserModule } from '@my-product-app/user';
import { SharedModule } from '@my-product-app/backend-shared';
import { ProductController } from './controllers/product.controller';

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
    MicroserviceModule,
  ],
  controllers: [ProductController],
  providers: [
    AppService,
    {
      provide: 'GATEWAY_SERVICE',
      useValue: {
        getUserData: () => ({ message: 'Hello API' }), // basic stub
      },
    },
  ],
})
export class AppModule {}
