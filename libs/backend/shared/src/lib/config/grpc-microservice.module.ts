import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import {
  getCompanyLocationServiceOptions,
  getCompanyServiceOptions,
  getProductServiceOptions,
  getUserServiceOptions,
} from './grpc.options';

@Module({
  imports: [
    ClientsModule.register([
      getUserServiceOptions(),
      getCompanyServiceOptions(),
      getCompanyLocationServiceOptions(),
      getProductServiceOptions(),
    ]),
  ],
  exports: [ClientsModule],
})
export class GrpcMicroserviceModule {}
