import { UserRole as GraphQLUserRole } from '@my-product-app/backend-shared-types';
import { ProtoUserRole } from '@my-product-app/backend-proto/generated';
import { mapEnum } from '../enums/enum-mapper';

/**
 * GraphQL → Proto
 */
export function mapGraphQLUserRoleToProto(
  role?: GraphQLUserRole
): ProtoUserRole {
  return mapEnum<GraphQLUserRole, ProtoUserRole>(
    {
      [GraphQLUserRole.ADMIN]: ProtoUserRole.ADMIN,
      [GraphQLUserRole.MANAGER]: ProtoUserRole.MANAGER,
      [GraphQLUserRole.OPERATOR]: ProtoUserRole.OPERATOR,
      [GraphQLUserRole.STAFF]: ProtoUserRole.STAFF,
      [GraphQLUserRole.VIEWER]: ProtoUserRole.VIEWER,
    },
    role,
    ProtoUserRole.STAFF // ✅ fallback
  );
}

/**
 * Proto → GraphQL
 */
export function mapProtoUserRoleToGraphQL(
  role?: ProtoUserRole
): GraphQLUserRole {
  return mapEnum<ProtoUserRole, GraphQLUserRole>(
    {
      [ProtoUserRole.ADMIN]: GraphQLUserRole.ADMIN,
      [ProtoUserRole.MANAGER]: GraphQLUserRole.MANAGER,
      [ProtoUserRole.OPERATOR]: GraphQLUserRole.OPERATOR,
      [ProtoUserRole.STAFF]: GraphQLUserRole.STAFF,
      [ProtoUserRole.VIEWER]: GraphQLUserRole.VIEWER,
      [ProtoUserRole.UNRECOGNIZED]: GraphQLUserRole.STAFF,
    },
    role,
    GraphQLUserRole.STAFF
  );
}
