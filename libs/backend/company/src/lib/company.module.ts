import { Module } from '@nestjs/common';
import { CompanyService } from './service/company.service';
import { CompanyPrismaModule } from '@my-product-app/backend-company-prisma';

@Module({
  imports: [CompanyPrismaModule],
  providers: [CompanyService],
})
export class CompanyModule {}
