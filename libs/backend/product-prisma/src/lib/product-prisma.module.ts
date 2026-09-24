import { Module } from '@nestjs/common';
import { ProductPrismaService } from './product-prisma.service';
import { productPrismaProvider } from './product-prisma.provider';

@Module({
  providers: [ProductPrismaService, productPrismaProvider],
  exports: [ProductPrismaService],
})
export class ProductPrismaModule {}
