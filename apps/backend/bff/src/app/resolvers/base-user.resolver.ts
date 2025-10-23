import { Observable, firstValueFrom } from 'rxjs';
import { ApolloError, UserInputError } from 'apollo-server-errors';

// Allow returning abstract classes
export type AbstractType<T> = abstract new (...args: any[]) => T;

/**
 * 🔹 Base abstract class for shared gRPC logic
 */
export abstract class AbstractBaseGrpcResolver<TService extends object> {
  constructor(protected readonly grpcService: TService) {}

  /** Helper for awaiting gRPC Observables */
  protected async handleGrpcCall<T>(call$: Observable<T>): Promise<T> {
    try {
      return await firstValueFrom(call$);
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

    if (msg.includes('Invalid email')) {
      return new UserInputError(msg);
    } else if (msg.includes('already registered')) {
      return new ApolloError(msg, 'ALREADY_EXISTS');
    }

    return new ApolloError('Unexpected gRPC error');
  }
}

/**
 *  Factory function returning a subclass of AbstractBaseGrpcResolver
 */
export function BaseGrpcResolver<TService extends object>(
  GrpcService: new (...args: any[]) => TService
): AbstractType<AbstractBaseGrpcResolver<TService>> {
  abstract class BaseResolver extends AbstractBaseGrpcResolver<TService> {
    // optional: you can inject shared hooks or decorators here later
  }

  return BaseResolver;
}
