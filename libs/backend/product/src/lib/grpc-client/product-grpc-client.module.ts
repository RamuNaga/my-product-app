import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { getProductServiceOptions } from '@my-product-app/backend-shared';
import { ProductGrpcClientService } from './product-grpc-client.service';

@Module({
  imports: [ClientsModule.register([getProductServiceOptions()])],
  providers: [ProductGrpcClientService],
  exports: [ProductGrpcClientService],
})
export class ProductGrpcClientModule {}
