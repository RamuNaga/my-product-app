import { inject, Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';

import {
  FindAllProductsDocument,
  FindAllProductsQuery,
} from '@my-product-app/frontend-graphql-types';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// adjust path as needed

@Injectable({ providedIn: 'root' })
export class ProductService {
  readonly apollo = inject(Apollo);

  findAllProducts(): Observable<FindAllProductsQuery['products']> {
    console.log('ProductService: findAllProducts called');
    return this.apollo
      .watchQuery<FindAllProductsQuery>({
        query: FindAllProductsDocument,
      })
      .valueChanges.pipe(
        map((result) => {
          console.log('Fetched products:', result.data.products);
          return result.data.products;
        })
      );
  }
}
