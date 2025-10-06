import { Module } from '@nestjs/common';
import { WorkorderPrismaService } from './workorder-prisma.service';

@Module({
  providers: [WorkorderPrismaService],
  exports: [WorkorderPrismaService],
})
export class WorkOrderPrismaModule {}
