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
    productId: w.productId ?? null,
    createdAt: toIso(w.createdAt),
  }));
}

// import {
//   Workorder as GqlWorkorder,
//   WorkOrderStatus,
//   Priority,
// } from '@my-product-app/frontend-graphql-types';
// import { WorkorderListModel } from './workorder.model';

// const toIso = (d?: any): string => (d ? new Date(d as any).toISOString() : '');

// export function mapGqlWorkordersToListModel(
//   gqlWorkorders: GqlWorkorder[]
// ): WorkorderListModel[] {
//   return (gqlWorkorders || []).map((w) => ({
//     id: w.id,
//     workOrderCode: w.workOrderCode ?? '',
//     clientLocation: w.clientLocation ?? '',
//     vendorOrClient: w.vendorOrClient ?? '',
//     quantity: w.quantity ?? 0,
//     deliveryDate: toIso(w.deliveryDate),
//     status: (w.status as WorkOrderStatus) ?? WorkOrderStatus.REQUESTED,
//     priority: (w.priority as Priority) ?? null,
//     // ✅ Removed product object (no nested relation)
//     productId: w.productId ?? null,
//     createdById: w.createdById ?? null,
//     approvedById: w.approvedById ?? null,
//     companyId: w.companyId ?? null,
//     attachments: w.attachments ?? [],
//     assignedTo: w.assignedTo ?? '',
//     comments: w.comments ?? '',
//     createdAt: toIso(w.createdAt),
//     updatedAt: toIso(w.updatedAt),
//   }));
// }
