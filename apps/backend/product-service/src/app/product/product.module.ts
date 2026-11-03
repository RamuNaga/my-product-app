import { Module } from '@nestjs/common';
import { ProductPrismaModule } from '@my-product-app/backend-prisma/product-prisma';

import { ProductGrpcController } from './product-grpc.controller';
import { ProductGrpcService } from './product-grpc.service';

@Module({
  imports: [ProductPrismaModule],
  controllers: [ProductGrpcController],
  providers: [ProductGrpcService],
})
export class ProductFeatureModule {}
