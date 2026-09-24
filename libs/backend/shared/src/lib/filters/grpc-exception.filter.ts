import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  Logger,
} from '@nestjs/common';

import { RpcException } from '@nestjs/microservices';
import { status } from '@grpc/grpc-js';
import { Observable, throwError } from 'rxjs';

type PrismaLikeError = {
  code?: string;
  message?: string;
  stack?: string;
  meta?: {
    target?: string | string[];
    field_name?: string;
    modelName?: string;
  };
};

type GrpcServiceError = {
  code: number;
  message?: string;
  details?: string;
  stack?: string;
};

type GrpcError = {
  code: number;
  message: string;
};

@Catch()
export class GrpcExceptionFilter
  implements ExceptionFilter<unknown>
{
  private readonly logger = new Logger(
    GrpcExceptionFilter.name
  );

  catch(
    exception: unknown,
    _host: ArgumentsHost
  ): Observable<never> {
    /*
     * Preserve RpcExceptions explicitly thrown by application code.
     *
     * Example:
     * throw new RpcException({
     *   code: status.NOT_FOUND,
     *   message: 'Company was not found',
     * });
     */
    if (exception instanceof RpcException) {
      return throwError(() => exception.getError());
    }

    /*
     * Preserve errors received from downstream gRPC services.
     *
     * This prevents ALREADY_EXISTS, NOT_FOUND, etc. from being
     * converted into INTERNAL by an upstream service such as the BFF.
     */
    if (this.isGrpcServiceError(exception)) {
      return throwError(() => ({
        code: exception.code,
        message:
          exception.details ||
          exception.message ||
          'RPC operation failed',
      }));
    }

    /*
     * Convert known Prisma errors into appropriate gRPC errors.
     */
    if (this.isPrismaError(exception)) {
      const grpcError = this.mapPrismaError(exception);

      /*
       * Expected errors such as duplicate records don't need an
       * error-level stack trace. Unknown Prisma errors should be logged.
       */
      if (grpcError.code === status.INTERNAL) {
        this.logger.error(
          `Unhandled Prisma error: ${exception.code}`,
          exception.stack || exception.message
        );
      } else {
        this.logger.warn(
          `Prisma error ${exception.code}: ${grpcError.message}`
        );
      }

      return throwError(() => grpcError);
    }

    /*
     * Do not expose unknown internal error details to clients.
     * Log the full error internally and return a safe message.
     */
    this.logger.error(
      'Unhandled gRPC error',
      exception instanceof Error
        ? exception.stack
        : String(exception)
    );

    return throwError(() => ({
      code: status.INTERNAL,
      message: 'Internal server error',
    }));
  }

  /**
   * Detect errors returned by another gRPC service.
   */
  private isGrpcServiceError(
    exception: unknown
  ): exception is GrpcServiceError {
    if (
      typeof exception !== 'object' ||
      exception === null ||
      !('code' in exception)
    ) {
      return false;
    }

    const code = (exception as GrpcServiceError).code;

    return (
      typeof code === 'number' &&
      Number.isInteger(code) &&
      code >= status.OK &&
      code <= status.UNAUTHENTICATED
    );
  }

  /**
   * Detect Prisma known-request errors without relying on instanceof.
   *
   * This works better in monorepos that have multiple generated
   * Prisma clients.
   */
  private isPrismaError(
    exception: unknown
  ): exception is PrismaLikeError {
    if (
      typeof exception !== 'object' ||
      exception === null ||
      !('code' in exception)
    ) {
      return false;
    }

    const code = (exception as PrismaLikeError).code;

    return (
      typeof code === 'string' &&
      /^P\d{4}$/.test(code)
    );
  }

  /**
   * Map known Prisma error codes to gRPC status codes.
   */
  private mapPrismaError(
    exception: PrismaLikeError
  ): GrpcError {
    switch (exception.code) {
      /*
       * Supplied value is too long for the database column.
       */
      case 'P2000':
        return {
          code: status.INVALID_ARGUMENT,
          message: 'A supplied value is too long',
        };

      /*
       * Required record does not exist.
       */
      case 'P2001':
      case 'P2025':
        return {
          code: status.NOT_FOUND,
          message: 'The requested record was not found',
        };

      /*
       * Unique constraint violation.
       *
       * Example: a company with the same name already exists.
       */
      case 'P2002':
        return {
          code: status.ALREADY_EXISTS,
          message: this.uniqueConstraintMessage(exception),
        };

      /*
       * Foreign-key constraint violation.
       */
      case 'P2003':
        return {
          code: status.FAILED_PRECONDITION,
          message:
            'The operation violates a related-record constraint',
        };

      /*
       * Null or required-value constraint violations.
       */
      case 'P2011':
      case 'P2012':
      case 'P2013':
        return {
          code: status.INVALID_ARGUMENT,
          message: 'A required value is missing',
        };

      /*
       * Database connection pool timeout.
       */
      case 'P2024':
        return {
          code: status.UNAVAILABLE,
          message: 'The database is temporarily unavailable',
        };

      /*
       * Do not send raw database messages to the client.
       */
      default:
        return {
          code: status.INTERNAL,
          message: 'Database operation failed',
        };
    }
  }

  /**
   * Build a readable message for unique-constraint violations.
   */
  private uniqueConstraintMessage(
    exception: PrismaLikeError
  ): string {
    const target = exception.meta?.target;

    if (Array.isArray(target) && target.length > 0) {
      return (
        `A record with the same ` +
        `${target.join(', ')} already exists`
      );
    }

    if (typeof target === 'string' && target.length > 0) {
      return `A record with the same ${target} already exists`;
    }

    return 'A record with the same unique value already exists';
  }
}