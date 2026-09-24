// libs/backend/shared-mappers/src/lib/mapper/workorder-status.mapper.ts

import { WorkOrderStatus as GraphQLWorkOrderStatus } from '@my-product-app/backend-shared-types';
import { ProtoWorkOrderStatus } from '@my-product-app/backend-proto/generated';
import { mapEnum } from '../enums/enum-mapper';

/**
 * GraphQL → Proto
 */
export function mapGraphQLWorkOrderStatusToProto(
  status?: GraphQLWorkOrderStatus | keyof typeof GraphQLWorkOrderStatus
): ProtoWorkOrderStatus {
  if (status === undefined || status === null) {
    return ProtoWorkOrderStatus.WORK_ORDER_REQUESTED;
  }

  const normalized =
    typeof status === 'string'
      ? (GraphQLWorkOrderStatus as any)[status]
      : status;

  return mapEnum(
    {
      [GraphQLWorkOrderStatus.REQUESTED]:
        ProtoWorkOrderStatus.WORK_ORDER_REQUESTED,
      [GraphQLWorkOrderStatus.PENDING]: ProtoWorkOrderStatus.WORK_ORDER_PENDING,
      [GraphQLWorkOrderStatus.APPROVED]:
        ProtoWorkOrderStatus.WORK_ORDER_APPROVED,
      [GraphQLWorkOrderStatus.REJECTED]:
        ProtoWorkOrderStatus.WORK_ORDER_REJECTED,
      [GraphQLWorkOrderStatus.COMPLETED]:
        ProtoWorkOrderStatus.WORK_ORDER_COMPLETED,
      [GraphQLWorkOrderStatus.CANCELLED]:
        ProtoWorkOrderStatus.WORK_ORDER_CANCELLED,
    } as Record<GraphQLWorkOrderStatus, ProtoWorkOrderStatus>,
    normalized as GraphQLWorkOrderStatus,
    ProtoWorkOrderStatus.WORK_ORDER_REQUESTED // fallback
  );
}

/**
 * Proto → GraphQL
 */
export function mapProtoWorkOrderStatusToGraphQL(
  status?: ProtoWorkOrderStatus
): GraphQLWorkOrderStatus {
  return mapEnum(
    {
      [ProtoWorkOrderStatus.WORK_ORDER_REQUESTED]:
        GraphQLWorkOrderStatus.REQUESTED,
      [ProtoWorkOrderStatus.WORK_ORDER_PENDING]: GraphQLWorkOrderStatus.PENDING,
      [ProtoWorkOrderStatus.WORK_ORDER_APPROVED]:
        GraphQLWorkOrderStatus.APPROVED,
      [ProtoWorkOrderStatus.WORK_ORDER_REJECTED]:
        GraphQLWorkOrderStatus.REJECTED,
      [ProtoWorkOrderStatus.WORK_ORDER_COMPLETED]:
        GraphQLWorkOrderStatus.COMPLETED,
      [ProtoWorkOrderStatus.WORK_ORDER_CANCELLED]:
        GraphQLWorkOrderStatus.CANCELLED,
      [ProtoWorkOrderStatus.UNRECOGNIZED]: GraphQLWorkOrderStatus.REQUESTED, // safe fallback
    } as Record<ProtoWorkOrderStatus, GraphQLWorkOrderStatus>,
    status,
    GraphQLWorkOrderStatus.REQUESTED
  );
}
