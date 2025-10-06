import { UserRole as GraphQLUserRole } from '../enums/enum';
import { ProtoUserRole } from '@my-product-app/backend-proto/generated';
import { mapEnum } from '../enums/enum-mapper';

// GraphQL → Proto
export const mapGraphQLUserRoleToProto = (
  role: GraphQLUserRole
): ProtoUserRole =>
  mapEnum(
    {
      [GraphQLUserRole.ADMIN]: ProtoUserRole.ADMIN,
      [GraphQLUserRole.MANAGER]: ProtoUserRole.MANAGER,
      [GraphQLUserRole.OPERATOR]: ProtoUserRole.OPERATOR,
      [GraphQLUserRole.STAFF]: ProtoUserRole.STAFF,
      [GraphQLUserRole.VIEWER]: ProtoUserRole.VIEWER,
    },
    role
  );

// Proto → GraphQL
export const mapProtoUserRoleToGraphQL = (
  role: ProtoUserRole
): GraphQLUserRole =>
  mapEnum(
    {
      [ProtoUserRole.ADMIN]: GraphQLUserRole.ADMIN,
      [ProtoUserRole.MANAGER]: GraphQLUserRole.MANAGER,
      [ProtoUserRole.OPERATOR]: GraphQLUserRole.OPERATOR,
      [ProtoUserRole.STAFF]: GraphQLUserRole.STAFF,
      [ProtoUserRole.VIEWER]: GraphQLUserRole.VIEWER,
      [ProtoUserRole.UNRECOGNIZED]: GraphQLUserRole.STAFF, // fallback
    },
    role
  );
