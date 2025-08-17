import { Module } from '@nestjs/common';

import { WorkorderResolver } from './resolver/workorder.resolver';
import { WorkOrderService } from './service/workorder.service';
import { SharedModule } from '@my-product-app/backend-shared';

@Module({
  imports: [SharedModule],
  providers: [WorkOrderService, WorkorderResolver],
})
export class WorkorderModule {}
