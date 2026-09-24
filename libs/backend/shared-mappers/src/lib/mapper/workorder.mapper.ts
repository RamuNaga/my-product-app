import { ProtoWorkOrder } from '@my-product-app/backend-proto/generated';
import { WorkOrder as GraphQLWorkOrder } from '@my-product-app/backend-graphql-types';
import { timestampToDate } from '@my-product-app/backend-shared';
import { mapProtoWorkOrderStatusToGraphQL } from './workorder-status.mapper';

/**
 * Map a single Proto WorkOrder → GraphQL WorkOrder
 */
export function mapProtoWorkOrderToGraphQL(
  proto: ProtoWorkOrder
): GraphQLWorkOrder {
  return {
    id: proto.id,
    productId: proto.productId,
    clientLocation: proto.clientLocation,
    vendorOrClient: proto.vendorOrClient,
    quantity: proto.quantity,
    deliveryDate: proto.deliveryDate
      ? timestampToDate(proto.deliveryDate)
      : new Date(),
    description: proto.description ?? '',
    status: mapProtoWorkOrderStatusToGraphQL(proto.status),
    createdById: proto.createdById,
    workOrderCode: proto.workOrderCode ?? '',
    createdAt: proto.createdAt ? timestampToDate(proto.createdAt) : new Date(),
    updatedAt: proto.updatedAt ? timestampToDate(proto.updatedAt) : new Date(),
  };
}
