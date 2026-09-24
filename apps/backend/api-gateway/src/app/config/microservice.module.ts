// microservice.module.ts
import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import {
  getUserServiceOptions,
  getProductServiceOptions,
  getWorkorderServiceOptions,
  getCompanyServiceOptions,
  getCompanyLocationServiceOptions,
} from '@my-product-app/backend-shared';

@Module({
  imports: [
    ClientsModule.register([
      getUserServiceOptions(),
      getCompanyServiceOptions(),
      getCompanyLocationServiceOptions(),
      getProductServiceOptions(),
      getWorkorderServiceOptions(),
    ]),
  ],
  exports: [ClientsModule],
})
export class MicroserviceModule {}
