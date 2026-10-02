import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

import {
  CORRELATION_ID_HEADER,
  CORRELATION_ID_REQUEST_KEY,
} from './correlation.constants';
import {
  generateCorrelationId,
  normalizeCorrelationId,
} from './correlation.utils';
import { CorrelationContextService } from './correlation-context.service';

@Injectable()
export class CorrelationMiddleware implements NestMiddleware {
  constructor(private readonly correlationContext: CorrelationContextService) {}

  use(req: Request, res: Response, next: NextFunction): void {
    const incomingCorrelationId = normalizeCorrelationId(
      req.headers[CORRELATION_ID_HEADER],
    );

    const correlationId = incomingCorrelationId ?? generateCorrelationId();

    Object.assign(req, {
      [CORRELATION_ID_REQUEST_KEY]: correlationId,
    });

    res.setHeader(CORRELATION_ID_HEADER, correlationId);

    this.correlationContext.run(correlationId, () => {
      next();
    });
  }
}
