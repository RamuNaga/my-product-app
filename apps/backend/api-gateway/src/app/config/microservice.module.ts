// microservice.module.ts
import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import {
  getUserServiceOptions,
  getProductServiceOptions,
  getWorkorderServiceOptions,
} from '@my-product-app/backend-shared';

@Module({
  imports: [
    ClientsModule.register([
      getUserServiceOptions(),
      getProductServiceOptions(),
      getWorkorderServiceOptions(),
    ]),
  ],
  exports: [ClientsModule],
})
export class MicroserviceModule {}
