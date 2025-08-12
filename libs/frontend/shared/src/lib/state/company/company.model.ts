import { Company } from '@my-product-app/frontend-graphql-types';

export type CompanyModel = Omit<Company, '  __typename'>;
