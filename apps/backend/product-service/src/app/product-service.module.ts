import { Module } from '@nestjs/common';
import { ProductModule } from '@my-product-app/product';
import { ProductGrpcController } from './product-grpc.controller';
import { ProductGrpcService } from './product-grpc.service';
import { ProductPrismaModule } from '@my-product-app/backend-prisma/product-prisma';
import { SharedModule } from '@my-product-app/backend-shared';
import { ItemGrpcService } from './item-grpc.service';
import { ItemGrpcController } from './item-grpc.controller';

@Module({
  imports: [SharedModule, ProductModule, ProductPrismaModule],
  controllers: [ProductGrpcController, ItemGrpcController],
  providers: [ProductGrpcService, ItemGrpcService],
})
export class ProductServiceModule {}
