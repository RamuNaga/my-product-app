import { gql } from 'apollo-angular';

export const FIND_ALL_PRODUCTS = gql`
  query findAllProduct {
    products {
      id
      productCode
      name
      description
      image
      productWeight
      price
      createdAt
    }
  }
`;
