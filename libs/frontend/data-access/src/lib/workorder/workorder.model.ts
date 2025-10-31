import {
  WorkOrder as GqlWorkorder,
  Priority,
  WorkOrderStatus,
} from '@my-product-app/frontend-graphql-types';

export type WorkorderResponse = Omit<GqlWorkorder, '__typename'>;

export type WorkorderSuccessResponse = {
  status: 'success';
  data: WorkorderResponse;
};

export type WorkorderErrorResponse = {
  status: 'error';
  message: string;
  statusCode?: number;
};

export type WorkorderCreateResponse =
  | WorkorderSuccessResponse
  | WorkorderErrorResponse;

export interface WorkorderListModel {
  id: number;
  workOrderCode: string;
  clientLocation: string;
  vendorOrClient: string;
  quantity: number;
  deliveryDate: string; // normalized to ISO string in mapper
  status: WorkOrderStatus;
  priority?: Priority | null;
  description: string; // normalized ISO string
  productId: number;
  createdAt: string;
}

export interface WorkorderListResponse {
  workorders: WorkorderListModel[];
  total: number;
}

export interface WorkorderQueryVariables {
  workOrderCode?: string;
  clientLocation?: string;
  status?: string;
  page?: number;
  pageSize?: number;
}
