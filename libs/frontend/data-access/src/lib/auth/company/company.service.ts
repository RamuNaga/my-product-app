import { inject, Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SEARCH_COMPANIES_QUERY } from './search-company';
import { Company } from '@my-product-app/frontend-graphql-types';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  private apollo = inject(Apollo);

  searchCompanies(searchTerm: string): Observable<Company[]> {
    return this.apollo
      .watchQuery<{ searchCompanies: Company[] }>({
        query: SEARCH_COMPANIES_QUERY,
        variables: { searchTerm },
      })
      .valueChanges.pipe(map((result) => result.data.searchCompanies));
  }
}
