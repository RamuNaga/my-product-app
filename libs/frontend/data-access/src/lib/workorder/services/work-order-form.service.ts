// work-order-form.service.ts
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '@my-product-app/frontend-core';

@Injectable({ providedIn: 'root' })
export class WorkOrderFormService {
  readonly httpService = inject(HttpService);

  getVendorsAndClients(): Observable<{ label: string; value: string }[]> {
    return this.httpService.get<{ label: string; value: string }[]>(
      '/assets/mocks/partners.json'
    );
  }

  getGreencoreLocations(): Observable<{ label: string; value: string }[]> {
    return this.httpService.get<{ label: string; value: string }[]>(
      '/assets/mocks/greencore-locations.json'
    );
  }
}
