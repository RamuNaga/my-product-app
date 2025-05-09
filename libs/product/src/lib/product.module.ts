import { PrismaModule } from '@my-product-app/prisma';
import { Module } from '@nestjs/common';
import { ProductService } from './service/product.service';
import { ProductResolver } from './resolver/product.resolver';

@Module({
  imports: [PrismaModule],
  controllers: [],
  providers: [ProductService, ProductResolver],
  exports: [],
})
export class ProductModule {}
