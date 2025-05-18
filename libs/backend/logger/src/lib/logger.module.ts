import { Global, Module, Logger } from '@nestjs/common';
import { AppLoggerService } from './app-logger/app-logger.service';

@Global()
@Module({
  providers: [
    AppLoggerService,
    {
      provide: Logger,
      useExisting: AppLoggerService,
    },
  ],
  exports: [Logger, AppLoggerService],
})
export class LoggerModule {}
