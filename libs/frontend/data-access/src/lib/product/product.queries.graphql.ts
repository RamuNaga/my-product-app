import { gql } from 'apollo-angular';

export const FIND_ALL_PRODUCTS = gql`
  query findAllProduct {
    products {
      id
      productcode
      name
      description
      image
      createdAt
    }
  }
`;
