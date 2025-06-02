import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import * as path from 'path';

import { GraphQLConfigModule } from './config/graphql.module';
import { MicroserviceModule } from './config/microservice.module';
import { ProductModule } from '@my-product-app/product';
import { UserModule } from '@my-product-app/user';
import { SharedModule } from '@my-product-app/backend-shared';

@Module({
  imports: [
    GraphQLConfigModule,
    ProductModule,
    UserModule,
    SharedModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [
        path.resolve(__dirname, '../../../../../.env'), // root .env
      ],
    }),
    MicroserviceModule,
  ],
  controllers: [AppController],
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
