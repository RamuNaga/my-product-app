import { Module } from '@nestjs/common';

import { RegistrationService } from './service/registration.service';
import { SharedModule } from '@my-product-app/backend-shared';
import { UserGrpcClientModule } from '@my-product-app/user-grpc-client';
import { CompanyGrpcClientModule } from '@my-product-app/company-grpc-client';
import { CompanyLocationGrpcClientModule } from '@my-product-app/company-location-grpc-client';

@Module({
  imports: [
    SharedModule,
    UserGrpcClientModule,
    CompanyGrpcClientModule,
    CompanyLocationGrpcClientModule,
  ],
  providers: [RegistrationService],
  exports: [RegistrationService],
})
export class RegistrationModule {}
