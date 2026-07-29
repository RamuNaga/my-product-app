import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';

import { getCompanyLocationServiceOptions } from '@my-product-app/backend-shared';
import { CompanyLocationGrpcClientService } from './company-location-grpc-client.service';

@Module({
  imports: [ClientsModule.register([getCompanyLocationServiceOptions()])],
  providers: [CompanyLocationGrpcClientService],
  exports: [CompanyLocationGrpcClientService, ClientsModule],
})
export class CompanyLocationGrpcClientModule {}
