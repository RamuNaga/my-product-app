import { Module } from '@nestjs/common';
import { WorkOrderPrismaService } from './workorder-prisma.service';

@Module({
  providers: [WorkOrderPrismaService],
  exports: [WorkOrderPrismaService],
})
export class WorkOrderPrismaModule {}
