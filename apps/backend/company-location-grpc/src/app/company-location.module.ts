import { Module } from '@nestjs/common';
import { CompanyLocationGrpcController } from './company-location.controller';
import { CompanyLocationGrpcService } from './company-location.service';
import { SharedModule } from '@my-product-app/backend-shared';
import { CompanyLocationPrismaModule } from '@my-product-app/backend-prisma/company-location-prisma';

@Module({
  imports: [SharedModule, CompanyLocationPrismaModule],
  controllers: [CompanyLocationGrpcController],
  providers: [CompanyLocationGrpcService],
})
export class CompanyLocationGrpcModule {}
