import { Product } from '../../generated/graphql';

export type ProductFormModel = Omit<
  Product,
  'id' | 'createdAt' | 'updatedAt' | '__typename'
>;

export type ProductResponse = Omit<Product, '__typename'>;
