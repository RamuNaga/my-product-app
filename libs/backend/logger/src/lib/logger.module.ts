import { Global, Module } from '@nestjs/common';
import { AppLoggerService } from './app-logger/app-logger.service';
import { LoggingInterceptor } from './interceptors/logging.interceptor';

@Global()
@Module({
  providers: [AppLoggerService, LoggingInterceptor],
  exports: [AppLoggerService, LoggingInterceptor],
})
export class LoggerModule {}
