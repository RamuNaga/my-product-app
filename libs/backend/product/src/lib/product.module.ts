import { Module } from '@nestjs/common';
import { ProductResolver } from './resolver/product.resolver';
import { SharedModule } from '@my-product-app/backend-shared';
import { ProductService } from './service/product.service';
import { PrismaService } from '@my-product-app/prisma';

@Module({
  imports: [SharedModule],
  controllers: [],
  providers: [ProductService, ProductResolver, PrismaService],
  exports: [ProductService],
})
export class ProductModule {}
