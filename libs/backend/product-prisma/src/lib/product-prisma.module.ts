import { Module } from '@nestjs/common';
import { ProductPrismaService } from './product-prisma.service';

@Module({
  providers: [ProductPrismaService],
  exports: [ProductPrismaService],
})
export class ProductPrismaModule {}
