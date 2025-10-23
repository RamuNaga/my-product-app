import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { getUserServiceOptions } from '@my-product-app/backend-shared';
import { UserGrpcClientService } from './user-grpc-client.service';

@Module({
  imports: [ClientsModule.register([getUserServiceOptions()])],
  providers: [UserGrpcClientService],
  exports: [UserGrpcClientService],
})
export class UserGrpcClientModule {}
