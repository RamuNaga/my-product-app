import { Module } from '@nestjs/common';
import { ProductResolver } from './resolver/product.resolver';
import { SharedModule } from '@my-product-app/backend-shared';
import { ProductService } from './service/product.service';

@Module({
  imports: [SharedModule],
  controllers: [],
  providers: [ProductService, ProductResolver],
  exports: [],
})
export class ProductModule {}
