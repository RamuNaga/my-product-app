import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import * as path from 'path';

import { GraphQLConfigModule } from './config/graphql.module';
import { MicroserviceModule } from './config/microservice.module';
import { ProductModule } from '@my-product-app/product';
import { UserModule } from '@my-product-app/user';

@Module({
  imports: [
    GraphQLConfigModule,
    ProductModule,
    UserModule,
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
      provide: 'USER_SERVICE',
      useValue: {
        getUserData: () => ({ message: 'Hello API' }), // basic stub
      },
    },
  ],
})
export class AppModule {}
