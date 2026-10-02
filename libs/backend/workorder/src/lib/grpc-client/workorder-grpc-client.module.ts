import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import {
  getWorkorderServiceOptions,
  SharedModule,
} from '@my-product-app/backend-shared';
import { WorkOrderGrpcClientService } from './workorder-grpc-client.service';

@Module({
  imports: [
    SharedModule,
    ClientsModule.register([getWorkorderServiceOptions()]),
  ],
  providers: [WorkOrderGrpcClientService],
  exports: [WorkOrderGrpcClientService],
})
export class WorkOrderGrpcClientModule {}
