import { ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { ThrottlerGuard } from '@nestjs/throttler';

@Injectable()
export class GraphqlThrottlerGuard extends ThrottlerGuard {
  protected getRequestResponse(context: ExecutionContext): {
    req: Record<string, any>;
    res: Record<string, any>;
  } {
    const gqlContext = GqlExecutionContext.create(context);
    const ctx = gqlContext.getContext();

    return {
      req: ctx.req,
      res: ctx.res,
    };
  }
}
