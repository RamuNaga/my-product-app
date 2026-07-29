import { Module } from '@nestjs/common';
import { CompanyPrismaService } from './company-prisma.service';
import { companyPrismaProvider } from './company-prisma.provider';

@Module({
  providers: [companyPrismaProvider, CompanyPrismaService],
  exports: [CompanyPrismaService],
})
export class CompanyPrismaModule {}
