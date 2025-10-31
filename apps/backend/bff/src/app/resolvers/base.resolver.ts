import { Observable, lastValueFrom } from 'rxjs';
import { ApolloError } from 'apollo-server-errors';

// Allow returning abstract classes
export type AbstractType<T> = abstract new (...args: any[]) => T;

/**
 *  Base abstract class for shared gRPC logic
 */
export abstract class AbstractBaseGrpcResolver<TService extends object> {
  constructor(protected readonly grpcService: TService) {}

  /** Helper for awaiting gRPC Observables */
  protected async handleGrpcCall<T>(call$: Observable<T>): Promise<T> {
    try {
      return call$ instanceof Promise
        ? await call$
        : await lastValueFrom(call$);
    } catch (error) {
      throw this.mapGrpcErrorToGraphQLError(error);
    }
  }

  /** Map low-level gRPC errors to GraphQL-friendly ones */
  private mapGrpcErrorToGraphQLError(error: unknown): ApolloError {
    if (!(error instanceof Error)) {
      return new ApolloError('Unknown gRPC error occurred');
    }

    const msg = error.message || 'Unknown error';
    return new ApolloError(`gRPC error: ${msg}`);
  }
}

/**
 *  Factory function returning a subclass of AbstractBaseGrpcResolver
 */
export function BaseGrpcResolver<TService extends object>(
  _GrpcService: new (...args: any[]) => TService
): AbstractType<AbstractBaseGrpcResolver<TService>> {
  abstract class BaseResolver extends AbstractBaseGrpcResolver<TService> {
    // optional: you can inject shared hooks or decorators here later
  }

  return BaseResolver;
}

function wrapString(value?: string) {
  return value !== undefined ? { value } : undefined;
}

function wrapInt(value?: number) {
  return value !== undefined ? { value } : undefined;
}

export { wrapString, wrapInt };
