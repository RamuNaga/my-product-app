import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';

import {
  getCompanyLocationServiceOptions,
  SharedModule,
} from '@my-product-app/backend-shared';
import { CompanyLocationGrpcClientService } from './company-location-grpc-client.service';

@Module({
  imports: [
    SharedModule,
    ClientsModule.register([getCompanyLocationServiceOptions()]),
  ],
  providers: [CompanyLocationGrpcClientService],
  exports: [CompanyLocationGrpcClientService, ClientsModule],
})
export class CompanyLocationGrpcClientModule {}
