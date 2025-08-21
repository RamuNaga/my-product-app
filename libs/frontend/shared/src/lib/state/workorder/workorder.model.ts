// workorder.model.ts

export interface Product {
  id: number;
  name: string;
  productCode: string;
  price: number;
}

export interface User {
  id: number;
  username: string;
  email: string;
}

export interface Workorder {
  id: number;
  clientLocation: string;
  vendorOrClient: string;
  quantity: number;
  deliveryDate: string;
  description: string;
  workOrderCode?: string;
  status?: string;
  priority?: string;
  product?: Product;
  createdBy?: User;
  createdAt?: string;
  updatedAt?: string;
}
