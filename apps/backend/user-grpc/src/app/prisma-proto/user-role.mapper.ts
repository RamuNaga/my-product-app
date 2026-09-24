import { ProtoUserRole } from '@my-product-app/backend-proto/generated';

import { UserRole as PrismaUserRole } from '@my-product-app/user-prisma';

import { mapEnum } from '@my-product-app/backend-shared-mappers';
export function mapProtoUserRoleToPrisma(role?: ProtoUserRole): PrismaUserRole {
  return mapEnum<ProtoUserRole, PrismaUserRole>(
    {
      [ProtoUserRole.ADMIN]: PrismaUserRole.ADMIN,
      [ProtoUserRole.MANAGER]: PrismaUserRole.MANAGER,
      [ProtoUserRole.OPERATOR]: PrismaUserRole.OPERATOR,
      [ProtoUserRole.STAFF]: PrismaUserRole.STAFF,
      [ProtoUserRole.VIEWER]: PrismaUserRole.VIEWER,
      [ProtoUserRole.UNRECOGNIZED]: PrismaUserRole.STAFF,
    },
    role,
    PrismaUserRole.STAFF,
  );
}

export function mapPrismaUserRoleToProto(role?: PrismaUserRole): ProtoUserRole {
  return mapEnum<PrismaUserRole, ProtoUserRole>(
    {
      [PrismaUserRole.ADMIN]: ProtoUserRole.ADMIN,
      [PrismaUserRole.MANAGER]: ProtoUserRole.MANAGER,
      [PrismaUserRole.OPERATOR]: ProtoUserRole.OPERATOR,
      [PrismaUserRole.STAFF]: ProtoUserRole.STAFF,
      [PrismaUserRole.VIEWER]: ProtoUserRole.VIEWER,
    },
    role,
    ProtoUserRole.STAFF,
  );
}
