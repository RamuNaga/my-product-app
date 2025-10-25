import { Module } from '@nestjs/common';
import { ProductModule } from '@my-product-app/product';
import { ProductGrpcController } from './product-grpc.controller';
import { ProductGrpcService } from './product-grpc.service';
import { ProductPrismaModule } from '@my-product-app/backend-prisma/product-prisma';

@Module({
  imports: [ProductModule, ProductPrismaModule],
  controllers: [ProductGrpcController],
  providers: [ProductGrpcService],
})
export class ProductServiceModule {}
