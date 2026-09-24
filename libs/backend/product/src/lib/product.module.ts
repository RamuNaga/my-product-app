import { Module } from '@nestjs/common';
import { SharedModule } from '@my-product-app/backend-shared';
import { ProductService } from './service/product.service';
import { ProductPrismaModule } from '@my-product-app/backend-prisma/product-prisma';

@Module({
  imports: [SharedModule, ProductPrismaModule],
  controllers: [],
  providers: [ProductService],
  exports: [ProductService],
})
export class ProductModule {}
