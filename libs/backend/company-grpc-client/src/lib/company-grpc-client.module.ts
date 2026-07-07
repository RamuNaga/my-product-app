import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';

import { getCompanyServiceOptions } from '@my-product-app/backend-shared';
import { CompanyGrpcClientService } from './company-grpc-client.service';

@Module({
  imports: [ClientsModule.register([getCompanyServiceOptions()])],
  providers: [CompanyGrpcClientService],
  exports: [CompanyGrpcClientService],
})
export class CompanyGrpcClientModule {}
