import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';
import { AppLoggerService } from '../app-logger/app-logger.service';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  constructor(private readonly logger: AppLoggerService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const now = Date.now();
    const request = context.switchToHttp().getRequest();

    const requestInfo = `${request?.method} ${request?.url}`;

    return next
      .handle()
      .pipe(
        tap(() =>
          this.logger.log(`[${requestInfo}] completed in ${Date.now() - now}ms`)
        )
      );
  }
}
