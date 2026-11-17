import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import {
  getProductServiceOptions,
  SharedModule,
} from '@my-product-app/backend-shared';
import { ProductGrpcClientService } from './product-grpc-client.service';
import { ItemGrpcClientService } from './item-grpc-client.service';

@Module({
  imports: [SharedModule, ClientsModule.register([getProductServiceOptions()])],
  providers: [ProductGrpcClientService, ItemGrpcClientService],
  exports: [ProductGrpcClientService, ItemGrpcClientService],
})
export class ProductGrpcClientModule {}
