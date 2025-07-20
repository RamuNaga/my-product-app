import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';

import {
  FindAllProductDocument,
  FindAllProductQuery,
} from '@my-product-app/frontend-graphql-types';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// adjust path as needed

@Injectable({ providedIn: 'root' })
export class ProductService {
  constructor(private apollo: Apollo) {}

  findAllProducts(): Observable<FindAllProductQuery['products']> {
    return this.apollo
      .watchQuery<FindAllProductQuery>({
        query: FindAllProductDocument,
      })
      .valueChanges.pipe(map((result) => result.data.products));
  }
}
