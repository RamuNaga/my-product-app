import { Module } from '@nestjs/common';
import { CompanyLocationService } from './service/company-location.service';
import { CompanyLocationResolver } from './resolver/company-location.resolver';
import { SharedModule } from '@my-product-app/backend-shared';
import { CompanyLocationPrismaModule } from '@my-product-app/backend-prisma/company-location-prisma';

@Module({
  imports: [SharedModule, CompanyLocationPrismaModule],
  providers: [CompanyLocationService, CompanyLocationResolver],
})
export class CompanyLocationModule {}
