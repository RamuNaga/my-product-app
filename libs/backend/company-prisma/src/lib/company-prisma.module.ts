import { Module } from '@nestjs/common';
import { CompanyPrismaService } from './company-prisma.service';

@Module({
  providers: [CompanyPrismaService],
  exports: [CompanyPrismaService],
})
export class CompanyPrismaModule {}
