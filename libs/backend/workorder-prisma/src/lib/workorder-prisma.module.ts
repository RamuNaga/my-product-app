import { Module } from '@nestjs/common';
import { WorkorderPrismaService } from './workorder-prisma.service';
import { workorderPrismaProvider } from './workorder-primsa.provider';

@Module({
  providers: [WorkorderPrismaService, workorderPrismaProvider],
  exports: [WorkorderPrismaService],
})
export class WorkOrderPrismaModule {}
