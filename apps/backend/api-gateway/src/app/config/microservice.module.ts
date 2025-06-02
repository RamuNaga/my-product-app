// microservice.module.ts
import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import {
  getUserServiceOptions,
  getProductServiceOptions,
} from '@my-product-app/backend-shared';

@Module({
  imports: [
    ClientsModule.register([
      getUserServiceOptions(),
      getProductServiceOptions(),
    ]),
  ],
  exports: [ClientsModule],
})
export class MicroserviceModule {}
