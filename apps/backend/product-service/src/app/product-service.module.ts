import { Module } from '@nestjs/common';
import { ProductModule } from '@my-product-app/product';
import { ProductGrpcController } from './product-grpc.controller';

@Module({
  imports: [ProductModule],
  controllers: [ProductGrpcController],
})
export class ProductServiceModule {}
