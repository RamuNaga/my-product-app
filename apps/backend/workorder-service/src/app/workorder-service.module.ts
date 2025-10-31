import { Module } from '@nestjs/common';
import { WorkOrderGrpcController } from './workorder-grpc.controller';
import { WorkOrderGrpcService } from './workorder-grpc.service';
import { WorkOrderPrismaModule } from '@my-product-app/backend-prisma/workorder-prisma';
import { SharedModule } from '@my-product-app/backend-shared';

@Module({
  imports: [SharedModule, WorkOrderPrismaModule],
  controllers: [WorkOrderGrpcController],
  providers: [WorkOrderGrpcService],
})
export class WorkOrderServiceModule {}
