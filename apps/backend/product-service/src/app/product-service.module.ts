import { Module } from '@nestjs/common';

import { ProductModule } from '@my-product-app/product';
import { SharedModule } from '@my-product-app/backend-shared';

import { ProductFeatureModule } from './product/product.module';
import { ItemModule } from './item/item.module';

@Module({
  imports: [SharedModule, ProductModule, ProductFeatureModule, ItemModule],
})
export class ProductServiceModule {}
