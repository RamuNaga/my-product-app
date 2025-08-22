import { gql } from 'apollo-angular';
import { WORKORDER_LIST_FIELDS } from './workorderFragments';

export const GET_WORKORDERS = gql`
  query GetWorkOrders(
    $page: Int
    $pageSize: Int
    $workOrderCode: String
    $clientLocation: String
    $status: String
  ) {
    workorders(
      page: $page
      pageSize: $pageSize
      workOrderCode: $workOrderCode
      clientLocation: $clientLocation
      status: $status
    ) {
      workorders {
        ...WorkorderListFields
      }
      total
    }
  }
  ${WORKORDER_LIST_FIELDS}
`;
