import { Module } from '@nestjs/common';
import { PrismaService } from '@my-product-app/prisma';

import { WorkorderResolver } from './resolver/workorder.resolver';
import { WorkOrderService } from './service/workorder.service';

@Module({
  providers: [WorkOrderService, WorkorderResolver, PrismaService],
})
export class WorkorderModule {}
