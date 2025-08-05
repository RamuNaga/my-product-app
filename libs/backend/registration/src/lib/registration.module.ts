import { Module } from '@nestjs/common';
import { SharedModule } from '@my-product-app/backend-shared';
import { PrismaService } from '@my-product-app/prisma';
import { RegistrationService } from './service/registration.service';
import { RegistrationResolver } from './resolver/registration.resolver';
import { UserService } from '@my-product-app/user';
import { CompanyService } from '@my-product-app/backend-company';
import { CompanyLocationService } from '@my-product-app/backend-company-location';

@Module({
  imports: [SharedModule],
  providers: [
    PrismaService,
    RegistrationService,
    RegistrationResolver,
    UserService,
    CompanyService,
    CompanyLocationService,
  ],
  exports: [RegistrationService],
})
export class RegistrationModule {}
