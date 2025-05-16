import { Injectable, LoggerService } from '@nestjs/common';

@Injectable()
export class AppLoggerService implements LoggerService {
  log(message: any, ...optionalParams: any[]) {
    console.log(message, ...optionalParams);
  }

  error(message: any, trace?: string, ...optionalParams: any[]) {
    console.error(message, trace, ...optionalParams);
  }

  warn(message: any, ...optionalParams: any[]) {
    console.warn(message, ...optionalParams);
  }

  debug?(message: any, ...optionalParams: any[]) {
    console.debug?.(message, ...optionalParams);
  }

  verbose?(message: any, ...optionalParams: any[]) {
    console.info?.(message, ...optionalParams);
  }
}
