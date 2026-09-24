import { Module } from '@nestjs/common';
import { CompanyLocationPrismaService } from './company-location-prisma.service';
import { companyLocationPrismaProvider } from './company-location-prisma.provider';

@Module({
  providers: [companyLocationPrismaProvider, CompanyLocationPrismaService],
  exports: [CompanyLocationPrismaService],
})
export class CompanyLocationPrismaModule {}
