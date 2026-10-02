import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Request } from 'express';
import { Observable, tap } from 'rxjs';

import { AppLoggerService } from '../app-logger/app-logger.service';

type CorrelatedRequest = Request & {
  correlationId?: string;
};
const CORRELATION_ID_HEADER = 'x-correlation-id';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  constructor(private readonly logger: AppLoggerService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    const startedAt = Date.now();

    const requestInfo = this.getRequestInfo(context);
    const correlationId = this.getCorrelationId(context);

    return next.handle().pipe(
      tap(() => {
        const duration = Date.now() - startedAt;

        this.logger.log(
          `[${correlationId}] [${requestInfo}] completed in ${duration}ms`,
        );
      }),
    );
  }

  private getRequestInfo(context: ExecutionContext): string {
    const contextType = context.getType<string>();

    if (contextType === 'http') {
      const request = context.switchToHttp().getRequest<CorrelatedRequest>();

      return `${request.method} ${request.originalUrl ?? request.url}`;
    }

    if (contextType === 'graphql') {
      return `GraphQL ${context.getHandler().name}`;
    }

    if (contextType === 'rpc') {
      return `RPC ${context.getHandler().name}`;
    }

    return `${contextType} ${context.getHandler().name}`;
  }

  private getCorrelationId(context: ExecutionContext): string {
    const contextType = context.getType<string>();

    if (contextType === 'http') {
      const request = context.switchToHttp().getRequest<CorrelatedRequest>();

      return request.correlationId ?? 'no-correlation-id';
    }

    if (contextType === 'graphql') {
      const args = context.getArgs();

      const graphqlContext = args[2] as
        | {
            req?: CorrelatedRequest;
          }
        | undefined;

      return graphqlContext?.req?.correlationId ?? 'no-correlation-id';
    }

    /*
     * For gRPC requests, correlation ID is carried
     * in the incoming gRPC Metadata.
     *
     * Keep this library independent of backend-shared
     * to avoid a circular dependency.
     */
    if (contextType === 'rpc') {
      const metadata = context.getArgByIndex<unknown>(1);

      if (
        metadata &&
        typeof metadata === 'object' &&
        'get' in metadata &&
        typeof metadata.get === 'function'
      ) {
        const values = metadata.get(CORRELATION_ID_HEADER) as unknown[];

        const value = values?.[0];

        if (typeof value === 'string' && value.trim()) {
          return value.trim();
        }
      }

      return 'no-correlation-id';
    }

    return 'no-correlation-id';
  }
}
