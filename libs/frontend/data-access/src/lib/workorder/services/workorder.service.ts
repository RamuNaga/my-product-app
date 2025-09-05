import { Injectable, inject } from '@angular/core';
import {
  CreateWorkOrderGQL,
  CreateWorkorderInput,
  CreateWorkOrderMutation,
  Workorder as GqlWorkorder,
} from '@my-product-app/frontend-graphql-types';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  WorkorderListResponse,
  WorkorderQueryVariables,
} from '../workorder.model';
import { mapGqlWorkordersToListModel } from '../workorder.mapper';
import { GetWorkOrdersGQL } from '@my-product-app/frontend-graphql-types';

@Injectable({ providedIn: 'root' })
export class WorkorderService {
  private getWorkOrdersGQL = inject(GetWorkOrdersGQL);

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
    return this.getWorkOrdersGQL.watch({ ...variables }).valueChanges.pipe(
      map((result) => {
        const gqlWorkorders = result.data?.workorders?.workorders ?? [];
        const total = result.data?.workorders?.total ?? 0;
        return {
          workorders: mapGqlWorkordersToListModel(
            gqlWorkorders as GqlWorkorder[]
          ),
          total,
        };
      })
    );
  }
}
