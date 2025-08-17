import { Injectable, inject } from '@angular/core';
import { Apollo } from 'apollo-angular';
import {
  CreateWorkOrderGQL,
  CreateWorkorderInput,
  CreateWorkOrderMutation,
} from '@my-product-app/frontend-graphql-types';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class WorkorderService {
  private apollo = inject(Apollo);
  private createWorkOrderGQL = inject(CreateWorkOrderGQL);

  createWorkOrder(
    input: CreateWorkorderInput
  ): Observable<CreateWorkOrderMutation['createWorkOrder']> {
    return this.createWorkOrderGQL
      .mutate({
        input, // pass input directly here
      })
      .pipe(
        map((result) => {
          if (result.data?.createWorkOrder) {
            return result.data.createWorkOrder;
          }
          throw new Error('No data returned from createWorkOrder mutation');
        })
      );
  }

  // Generic query for workorders using Apollo directly
  getWorkOrders<T = any>(query: any): Observable<T[]> {
    return this.apollo
      .watchQuery<{ workorders: T[] }>({ query })
      .valueChanges.pipe(
        map((result) => {
          if (result.data?.workorders) {
            return result.data.workorders;
          }
          throw new Error('No data returned from workorders query');
        })
      );
  }
}
