import { Module } from '@nestjs/common';
import { LoggerModule } from '@my-product-app/logger';
import { SharedJwtModule } from './auth/jwt.module';
import { PingModule } from './controllers/ping.controller';
import { MapperModule } from './mapper/mapper.module';
import { GrpcMicroserviceModule } from './config/grpc-microservice.module';

@Module({
  imports: [
    LoggerModule,
    MapperModule,
    SharedJwtModule,
    PingModule,
    GrpcMicroserviceModule,
  ],
  exports: [
    LoggerModule,
    SharedJwtModule,
    PingModule,
    MapperModule,
    GrpcMicroserviceModule,
  ],
})
export class SharedModule {}
