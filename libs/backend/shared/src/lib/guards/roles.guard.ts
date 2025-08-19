import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../decorators/roles.decorator';
import { GqlExecutionContext } from '@nestjs/graphql';
import { UserRole } from '../enums/enum';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    // Get roles defined in the @Roles() decorator
    const requiredRoles = this.reflector.getAllAndOverride<UserRole[]>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()]
    );

    if (!requiredRoles) {
      return true; // No roles required
    }

    //Convert to GraphQL context
    const gqlContext = GqlExecutionContext.create(context);
    const { user } = gqlContext.getContext().req; // user injected by JwtAuthGuard

    if (!user) return false;

    return requiredRoles.includes(user.role);
  }
}
