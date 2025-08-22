import { Injectable, inject } from '@angular/core';
import { Apollo } from 'apollo-angular';
import {
  CreateWorkOrderGQL,
  CreateWorkorderInput,
  CreateWorkOrderMutation,
  Workorder as GqlWorkorder,
} from '@my-product-app/frontend-graphql-types';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { GET_WORKORDERS } from '../graphql/get-workorders.graphql';
import {
  WorkorderListResponse,
  WorkorderQueryVariables,
} from '@my-product-app/frontend-shared';
import { mapGqlWorkordersToListModel } from '@my-product-app/frontend-shared';

@Injectable({ providedIn: 'root' })
export class WorkorderService {
  private apollo = inject(Apollo);
  private createWorkOrderGQL = inject(CreateWorkOrderGQL);

  createWorkOrder(
    input: CreateWorkorderInput
  ): Observable<CreateWorkOrderMutation['createWorkOrder']> {
    return this.createWorkOrderGQL.mutate({ input }).pipe(
      map((result) => {
        if (result.data?.createWorkOrder) {
          return result.data.createWorkOrder;
        }
        throw new Error('No data returned from createWorkOrder mutation');
      })
    );
  }

  getWorkOrders(
    variables: WorkorderQueryVariables
  ): Observable<WorkorderListResponse> {
    type GetWorkOrdersResult = {
      workorders: { workorders: GqlWorkorder[]; total: number };
    };

    return this.apollo
      .watchQuery<GetWorkOrdersResult>({
        query: GET_WORKORDERS,
        variables,
        fetchPolicy: 'network-only', // or 'cache-first' depending on UX
      })
      .valueChanges.pipe(
        map((result) => {
          const gqlWorkorders = result.data?.workorders?.workorders ?? [];
          const total = result.data?.workorders?.total ?? 0;

          return {
            workorders: mapGqlWorkordersToListModel(gqlWorkorders),
            total,
          };
        })
      );
  }
}
