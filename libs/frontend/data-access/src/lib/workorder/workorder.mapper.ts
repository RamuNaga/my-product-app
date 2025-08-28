import {
  Workorder as GqlWorkorder,
  WorkOrderStatus,
  Priority,
} from '@my-product-app/frontend-graphql-types';
import { WorkorderListModel } from './workorder.model';

const toIso = (d?: any): string => (d ? new Date(d as any).toISOString() : '');

export function mapGqlWorkordersToListModel(
  gqlWorkorders: GqlWorkorder[]
): WorkorderListModel[] {
  return (gqlWorkorders || []).map((w) => ({
    id: w.id,
    workOrderCode: w.workOrderCode ?? '',
    clientLocation: w.clientLocation ?? '',
    vendorOrClient: w.vendorOrClient ?? '',
    quantity: w.quantity ?? 0,
    deliveryDate: toIso(w.deliveryDate),
    status: (w.status as WorkOrderStatus) ?? WorkOrderStatus.Requested,
    priority: (w.priority as Priority) ?? null,
    product: w.product
      ? {
          id: w.product.id,
          name: w.product.name ?? '',
          productCode: w.product.productCode ?? '',
          price: w.product.price ?? null,
        }
      : null,
    createdAt: toIso(w.createdAt),
  }));
}
