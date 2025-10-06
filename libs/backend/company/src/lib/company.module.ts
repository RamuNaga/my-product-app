import { Module } from '@nestjs/common';
import { CompanyService } from './service/company.service';
import { CompanyResolver } from './resolver/company.resolver';
import { SharedModule } from '@my-product-app/backend-shared';
import { CompanyPrismaModule } from '@my-product-app/backend-company-prisma';

@Module({
  imports: [SharedModule, CompanyPrismaModule],
  providers: [CompanyService, CompanyResolver],
})
export class CompanyModule {}
