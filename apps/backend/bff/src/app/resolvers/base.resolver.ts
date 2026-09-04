import { GraphQLError } from 'graphql';
import { isObservable, lastValueFrom, Observable } from 'rxjs';

// Allow returning abstract classes
export type AbstractType<T> = abstract new (...args: any[]) => T;

/**
 * Base abstract class for shared gRPC logic.
 */
export abstract class AbstractBaseGrpcResolver<TService extends object> {
  constructor(protected readonly grpcService: TService) {}

  /**
   * Helper for awaiting gRPC observables or promises.
   */
  protected async handleGrpcCall<T>(
    call$: Observable<T> | Promise<T>,
  ): Promise<T> {
    try {
      return isObservable(call$) ? await lastValueFrom(call$) : await call$;
    } catch (error: unknown) {
      throw this.mapGrpcErrorToGraphQLError(error);
    }
  }

  /**
   * Maps low-level gRPC errors to GraphQL-friendly errors.
   */
  private mapGrpcErrorToGraphQLError(error: unknown): GraphQLError {
    if (!(error instanceof Error)) {
      return new GraphQLError('Unknown gRPC error occurred', {
        extensions: {
          code: 'INTERNAL_SERVER_ERROR',
        },
      });
    }

    return new GraphQLError(`gRPC error: ${error.message}`, {
      originalError: error,
      extensions: {
        code: 'GRPC_ERROR',
      },
    });
  }
}

/**
 * Factory function returning a subclass of AbstractBaseGrpcResolver.
 */
export function BaseGrpcResolver<TService extends object>(
  _GrpcService: new (...args: any[]) => TService,
): AbstractType<AbstractBaseGrpcResolver<TService>> {
  abstract class BaseResolver extends AbstractBaseGrpcResolver<TService> {
    // Shared hooks or decorators can be added here later.
  }

  return BaseResolver;
}

function wrapString(value?: string) {
  return value !== undefined ? { value } : undefined;
}

function wrapInt(value?: number) {
  return value !== undefined ? { value } : undefined;
}

export { wrapInt, wrapString };