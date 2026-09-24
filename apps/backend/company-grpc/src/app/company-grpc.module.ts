import { Module } from '@nestjs/common';
import { CompanyGrpcService } from './company-grpc.service';
import { CompanyGrpcController } from './company-grpc.controller';
import { SharedModule } from '@my-product-app/backend-shared';
import { CompanyPrismaModule } from '@my-product-app/backend-prisma/company-prisma';

@Module({
  imports: [SharedModule, CompanyPrismaModule],
  controllers: [CompanyGrpcController],
  providers: [CompanyGrpcService],
  exports: [CompanyGrpcService],
})
export class CompanyGrpcModule {}
