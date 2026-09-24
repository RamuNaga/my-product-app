import { Module } from '@nestjs/common';

//import { WorkOrderService } from './service/workorder.service';
import { SharedModule } from '@my-product-app/backend-shared';
import { WorkOrderPrismaModule } from '@my-product-app/backend-prisma/workorder-prisma';

@Module({
  imports: [SharedModule, WorkOrderPrismaModule],
  providers: [],
})
export class WorkorderModule {}
