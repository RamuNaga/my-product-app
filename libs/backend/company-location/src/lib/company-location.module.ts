import { Module } from '@nestjs/common';
import { CompanyLocationService } from './service/company-location.service';
import { CompanyLocationPrismaModule } from '@my-product-app/backend-prisma/company-location-prisma';

@Module({
  imports: [CompanyLocationPrismaModule],
  providers: [CompanyLocationService],
})
export class CompanyLocationModule {}
