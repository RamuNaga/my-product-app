import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import {
  getUserServiceOptions,
  SharedModule,
} from '@my-product-app/backend-shared';
import { UserGrpcClientService } from './user-grpc-client.service';

@Module({
  imports: [SharedModule, ClientsModule.register([getUserServiceOptions()])],
  providers: [UserGrpcClientService],
  exports: [UserGrpcClientService, ClientsModule],
})
export class UserGrpcClientModule {}
