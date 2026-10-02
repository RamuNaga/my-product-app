import { Injectable } from '@nestjs/common';
import { Metadata } from '@grpc/grpc-js';

import { CORRELATION_ID_HEADER } from './correlation.constants';
import { CorrelationContextService } from './correlation-context.service';

@Injectable()
export class GrpcCorrelationMetadataService {
  constructor(private readonly correlationContext: CorrelationContextService) {}

  create(): Metadata {
    const metadata = new Metadata();

    const correlationId = this.correlationContext.getCorrelationId();

    if (correlationId) {
      metadata.set(CORRELATION_ID_HEADER, correlationId);
    }

    return metadata;
  }
}
