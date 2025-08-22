// workorderFragments.ts
import { gql } from 'apollo-angular';

// ------------------ Base fields (for creation) ------------------
export const WORKORDER_BASE_FIELDS = gql`
  fragment WorkorderBaseFields on Workorder {
    id
    clientLocation
    vendorOrClient
    quantity
    deliveryDate
    description
  }
`;

// ------------------ Full fields (for detailed queries) ------------------
export const WORKORDER_FIELDS = gql`
  fragment WorkorderFields on Workorder {
    ...WorkorderBaseFields
    workOrderCode
    status
    priority
    product {
      id
      name
      productCode
      price
    }
    createdBy {
      id
      role
      username
      email
    }
    createdAt
    updatedAt
  }
  ${WORKORDER_BASE_FIELDS}
`;

// ------------------ Minimal fields for table/list ------------------
export const WORKORDER_LIST_FIELDS = gql`
  fragment WorkorderListFields on Workorder {
    id
    workOrderCode
    clientLocation
    vendorOrClient
    quantity
    deliveryDate
    status
    priority
    product {
      id
      name
      productCode
      price
    }
  }
`;

// ------------------ Full details for single workorder view ------------------
export const WORKORDER_DETAILS_FIELDS = gql`
  fragment WorkorderDetailsFields on Workorder {
    ...WorkorderListFields
    description
    createdBy {
      id
      role
      username
      email
    }
    createdAt
    updatedAt
  }
  ${WORKORDER_LIST_FIELDS}
`;
