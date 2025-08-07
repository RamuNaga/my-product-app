import { Module } from '@nestjs/common';
import { CompanyService } from './service/company.service';
import { CompanyResolver } from './resolver/company.resolver';
import { SharedModule } from '@my-product-app/backend-shared';
import { PrismaService } from '@my-product-app/prisma';

@Module({
  imports: [SharedModule],
  providers: [CompanyService, CompanyResolver, PrismaService],
  exports: [CompanyService, CompanyResolver],
})
export class CompanyModule {}
