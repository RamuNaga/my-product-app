import { Module } from '@nestjs/common';
import { ProductResolver } from './resolver/product.resolver';
import { SharedModule } from '@my-product-app/backend-shared';
import { ProductService } from './service/product.service';
import { ProductPrismaService } from '@my-product-app/backend-prisma/product-prisma';

@Module({
  imports: [SharedModule],
  controllers: [],
  providers: [ProductService, ProductResolver, ProductPrismaService],
  exports: [ProductService],
})
export class ProductModule {}
