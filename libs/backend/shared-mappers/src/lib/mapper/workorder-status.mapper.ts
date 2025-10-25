import { WorkOrderStatus as GraphQLWorkOrderStatus } from '@my-product-app/backend-shared-types';
import { ProtoWorkOrderStatus } from '@my-product-app/backend-proto/generated';
import { mapEnum } from '../enums/enum-mapper';

/**
 * GraphQL → Proto
 */
export function mapGraphQLWorkOrderStatusToProto(
  status?: GraphQLWorkOrderStatus
): ProtoWorkOrderStatus {
  if (!status) return ProtoWorkOrderStatus.WORK_ORDER_REQUESTED; // or a sensible default
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
    },
    status
  );
}

/**
 * Proto → GraphQL
 */
export const mapProtoWorkOrderStatusToGraphQL = (
  status: ProtoWorkOrderStatus
): GraphQLWorkOrderStatus =>
  mapEnum(
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
      [ProtoWorkOrderStatus.UNRECOGNIZED]: GraphQLWorkOrderStatus.PENDING, // fallback
    },
    status
  );
