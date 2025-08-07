import { Module } from '@nestjs/common';
import { SharedModule } from '@my-product-app/backend-shared';
import { PrismaService } from '@my-product-app/prisma';
import { RegistrationService } from './service/registration.service';
import { RegistrationResolver } from './resolver/registration.resolver';
import { UserModule, UserService } from '@my-product-app/user';
import { CompanyModule, CompanyService } from '@my-product-app/backend-company';
import {
  CompanyLocationModule,
  CompanyLocationService,
} from '@my-product-app/backend-company-location';

@Module({
  imports: [SharedModule, UserModule, CompanyModule, CompanyLocationModule],
  providers: [
    PrismaService,
    RegistrationService,
    RegistrationResolver,
    UserService,
    CompanyService,
    CompanyLocationService,
  ],
  exports: [
    RegistrationService,
    RegistrationResolver,
    UserModule,
    CompanyModule,
    CompanyLocationModule,
  ],
})
export class RegistrationModule {}
