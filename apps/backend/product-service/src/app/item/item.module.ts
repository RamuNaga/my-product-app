import { Module } from '@nestjs/common';
import { ProductPrismaModule } from '@my-product-app/backend-prisma/product-prisma';

import { ItemGrpcController } from './item-grpc.controller';
import { ItemGrpcService } from './item-grpc.service';

@Module({
  imports: [ProductPrismaModule],
  controllers: [ItemGrpcController],
  providers: [ItemGrpcService],
})
export class ItemModule {}
