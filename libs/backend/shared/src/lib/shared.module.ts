import { Module } from '@nestjs/common';
import { LoggerModule } from '@my-product-app/logger';
import { SharedJwtModule } from './auth/jwt.module';
import { PingModule } from './controllers/ping.controller';
import { GrpcMicroserviceModule } from './config/grpc-microservice.module';

@Module({
  imports: [LoggerModule, SharedJwtModule, PingModule, GrpcMicroserviceModule],
  exports: [LoggerModule, SharedJwtModule, PingModule, GrpcMicroserviceModule],
})
export class SharedModule {}
