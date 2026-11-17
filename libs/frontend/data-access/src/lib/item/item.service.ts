import { inject, Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map, Observable } from 'rxjs';

import {
  GetItemsDocument,
  GetItemsQuery,
  GetItemByIdDocument,
  GetItemByIdQuery,
  CreateItemDocument,
  CreateItemMutation,
  CreateItemsDocument,
  CreateItemsMutation,
  UpdateItemDocument,
  UpdateItemMutation,
  DeactivateItemDocument,
  DeactivateItemMutation,
  ReactivateItemDocument,
  ReactivateItemMutation,
  CreateItemInput,
  CreateItemsInput,
  UpdateItemInput,
} from '@my-product-app/frontend-graphql-types';

@Injectable({ providedIn: 'root' })
export class ItemService {
  private readonly apollo = inject(Apollo);

  getItems(): Observable<GetItemsQuery['items']> {
    return this.apollo
      .query<GetItemsQuery>({
        query: GetItemsDocument,
        fetchPolicy: 'network-only',
      })
      .pipe(map(({ data }) => data.items));
  }

  getItemById(id: number): Observable<GetItemByIdQuery['item']> {
    return this.apollo
      .query<GetItemByIdQuery>({
        query: GetItemByIdDocument,
        variables: { id },
        fetchPolicy: 'network-only',
      })
      .pipe(map(({ data }) => data.item));
  }

  createItem(
    input: CreateItemInput,
  ): Observable<CreateItemMutation['createItem']> {
    return this.apollo
      .mutate<CreateItemMutation>({
        mutation: CreateItemDocument,
        variables: { input },
      })
      .pipe(
        map(({ data }) => {
          if (!data) throw new Error('Create item returned no data');
          return data.createItem;
        }),
      );
  }

  createItems(
    input: CreateItemsInput,
  ): Observable<CreateItemsMutation['createItems']> {
    return this.apollo
      .mutate<CreateItemsMutation>({
        mutation: CreateItemsDocument,
        variables: { input },
      })
      .pipe(
        map(({ data }) => {
          if (!data) throw new Error('Create items returned no data');
          return data.createItems;
        }),
      );
  }

  updateItem(
    input: UpdateItemInput,
  ): Observable<UpdateItemMutation['updateItem']> {
    return this.apollo
      .mutate<UpdateItemMutation>({
        mutation: UpdateItemDocument,
        variables: { input },
      })
      .pipe(
        map(({ data }) => {
          if (!data) throw new Error('Update item returned no data');
          return data.updateItem;
        }),
      );
  }

  deactivateItem(
    id: number,
  ): Observable<DeactivateItemMutation['deactivateItem']> {
    return this.apollo
      .mutate<DeactivateItemMutation>({
        mutation: DeactivateItemDocument,
        variables: { id },
      })
      .pipe(
        map(({ data }) => {
          if (!data) throw new Error('Deactivate item returned no data');
          return data.deactivateItem;
        }),
      );
  }

  reactivateItem(
    id: number,
  ): Observable<ReactivateItemMutation['reactivateItem']> {
    return this.apollo
      .mutate<ReactivateItemMutation>({
        mutation: ReactivateItemDocument,
        variables: { id },
      })
      .pipe(
        map(({ data }) => {
          if (!data) throw new Error('Reactivate item returned no data');
          return data.reactivateItem;
        }),
      );
  }
}
