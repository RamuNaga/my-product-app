import { Module } from '@nestjs/common';
import { WorkOrderServiceController } from './workorder-service.controller';
import { WorkorderModule } from '@my-product-app/workorder';

@Module({
  imports: [WorkorderModule],
  controllers: [WorkOrderServiceController],
  providers: [],
})
export class WorkOrderServiceModule {}
