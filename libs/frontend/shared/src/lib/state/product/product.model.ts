import { Product } from '@my-product-app/frontend-graphql-types';

export type ProductFormModel = Omit<
  Product,
  'id' | 'createdAt' | 'updatedAt' | '__typename'
>;

export type ProductListModel = Omit<Product, 'updatedAt' | '__typename'>;
export type ProductResponse = Omit<Product, '__typename'>;

export type ProductSuccessResponse = {
  status: 'success';
  data: ProductResponse;
};

export type ProductErrorResponse = {
  status: 'error';
  message: string;
  statusCode?: number;
};

export type ProductCreateResponse =
  | ProductSuccessResponse
  | ProductErrorResponse;
