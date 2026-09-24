import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { getWorkorderServiceOptions } from '@my-product-app/backend-shared';
import { WorkOrderGrpcClientService } from './workorder-grpc-client.service';

@Module({
  imports: [ClientsModule.register([getWorkorderServiceOptions()])],
  providers: [WorkOrderGrpcClientService],
  exports: [WorkOrderGrpcClientService],
})
export class WorkOrderGrpcClientModule {}
