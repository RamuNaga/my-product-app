import { Module } from '@nestjs/common';
import { LoggerModule } from '@my-product-app/logger';
import { SharedJwtModule } from './auth/jwt.module';
import { PingModule } from './controllers/ping.controller';
import { SharedConfigModule } from './config/config.module';
import { GrpcExceptionFilter } from './filters/grpc-exception.filter';
import { CorrelationContextService } from './correlation/correlation-context.service';
import { GrpcCorrelationMetadataService } from './correlation/grpc-correlation-metadata.service';
import { GrpcCorrelationInterceptor } from './correlation';

@Module({
  imports: [LoggerModule, SharedJwtModule, PingModule, SharedConfigModule],
  providers: [
    GrpcExceptionFilter,
    CorrelationContextService,
    GrpcCorrelationMetadataService,
    GrpcCorrelationInterceptor,
  ],
  exports: [
    LoggerModule,
    SharedJwtModule,
    PingModule,
    SharedConfigModule,
    GrpcExceptionFilter,
    CorrelationContextService,
    GrpcCorrelationMetadataService,
    GrpcCorrelationInterceptor,
  ],
})
export class SharedModule {}
