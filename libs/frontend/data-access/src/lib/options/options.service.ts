import { inject, Injectable } from '@angular/core';
import { HttpService } from '@my-product-app/frontend-core';
import { Observable } from 'rxjs';

export type Option = { label: string; value: string };

@Injectable({
  providedIn: 'root', // or provide it in module
})
export class OptionsService {
  readonly httpService = inject(HttpService);
  getOptions(): Observable<{ roles: Option[]; companyTypes: Option[] }> {
    return this.httpService.get<{ roles: Option[]; companyTypes: Option[] }>(
      '/assets/mocks/options.json'
    );
  }
}
