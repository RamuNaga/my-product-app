import { Module } from '@nestjs/common';
import { LoggerModule } from '@my-product-app/logger';
import { SharedJwtModule } from './auth/jwt.module';
import { PingModule } from './controllers/ping.controller';
import { SharedConfigModule } from './config/config.module';
import { GrpcExceptionFilter } from './filters/grpc-exception.filter';

@Module({
  imports: [LoggerModule, SharedJwtModule, PingModule, SharedConfigModule],
   providers: [
    GrpcExceptionFilter,
  ],
  exports: [LoggerModule, SharedJwtModule, PingModule, SharedConfigModule,GrpcExceptionFilter],
})
export class SharedModule {}
