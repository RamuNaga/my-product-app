import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Metadata } from '@grpc/grpc-js';
import { Observable } from 'rxjs';

import { CORRELATION_ID_HEADER } from './correlation.constants';
import { CorrelationContextService } from './correlation-context.service';
import { generateCorrelationId } from './correlation.utils';

@Injectable()
export class GrpcCorrelationInterceptor implements NestInterceptor {
  constructor(private readonly correlationContext: CorrelationContextService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    // Only interested in RPC requests.
    // HTTP and GraphQL continue normally.
    if (context.getType<string>() !== 'rpc') {
      return next.handle();
    }

    // For gRPC:
    // argument 0 = protobuf request data
    // argument 1 = gRPC Metadata
    //
    // TCP RPC can also have context type "rpc", so check that
    // argument 1 actually behaves like gRPC Metadata.
    const metadata = context.getArgByIndex<Metadata | undefined>(1);

    const incomingValue =
      metadata && typeof metadata.get === 'function'
        ? metadata.get(CORRELATION_ID_HEADER)?.[0]
        : undefined;
    console.log('Raw incoming gRPC correlation ID:', incomingValue);

    const correlationId =
      typeof incomingValue === 'string' && incomingValue.trim()
        ? incomingValue.trim()
        : generateCorrelationId();

    // Temporary diagnostic log.
    console.log('Resolved gRPC correlation ID:', correlationId);

    return new Observable((subscriber) => {
      this.correlationContext.run(correlationId, () => {
        next.handle().subscribe({
          next: (value) => subscriber.next(value),
          error: (error) => subscriber.error(error),
          complete: () => subscriber.complete(),
        });
      });
    });
  }
}
