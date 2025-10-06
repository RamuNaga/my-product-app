import { Module } from '@nestjs/common';
import { UserGrpcController } from './user-grpc.controller';
import { UserGrpcService } from './user-grpc.service';

@Module({
  imports: [],
  controllers: [UserGrpcController],
  providers: [UserGrpcService],
})
export class UserGrpcModule {}
