import { Module } from '@nestjs/common';
import { CompanyLocationService } from './service/company-location.service';
import { CompanyLocationResolver } from './resolver/company-location.resolver';
import { SharedModule } from '@my-product-app/backend-shared';
import { PrismaService } from '@my-product-app/prisma';

@Module({
  imports: [SharedModule],
  providers: [CompanyLocationService, CompanyLocationResolver, PrismaService],
  exports: [CompanyLocationService, CompanyLocationResolver],
})
export class CompanyLocationModule {}
