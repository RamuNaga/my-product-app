import { Module } from '@nestjs/common';
import { CompanyLocationPrismaService } from './company-location-prisma.service';

@Module({
  providers: [CompanyLocationPrismaService],
  exports: [CompanyLocationPrismaService],
})
export class CompanyLocationPrismaModule {}
