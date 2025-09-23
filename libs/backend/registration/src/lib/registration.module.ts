import { Module } from '@nestjs/common';
import { SharedModule } from '@my-product-app/backend-shared';
import {
  UserPrismaService,
  UserPrismaModule,
} from '@my-product-app/backend-prisma/user-prisma';
import { RegistrationService } from './service/registration.service';
import { RegistrationResolver } from './resolver/registration.resolver';
import { UserModule } from '@my-product-app/user';
import { CompanyModule } from '@my-product-app/backend-company';
import { CompanyLocationModule } from '@my-product-app/backend-company-location';

@Module({
  imports: [
    SharedModule,
    UserPrismaModule,
    UserModule,
    CompanyModule,
    CompanyLocationModule,
  ],
  providers: [RegistrationService, RegistrationResolver],
  exports: [
    RegistrationService,
    RegistrationResolver,
    UserModule,
    CompanyModule,
    CompanyLocationModule,
  ],
})
export class RegistrationModule {}
