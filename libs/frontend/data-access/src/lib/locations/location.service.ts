import { inject, Injectable } from '@angular/core';
import { HttpService } from '@my-product-app/frontend-core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Location, LocationData } from '../interfaces/location.interface';

@Injectable({
  providedIn: 'root',
})
export class LocationsService {
  private readonly httpService = inject(HttpService);

  getLocations(): Observable<Location[]> {
    return this.httpService
      .get<LocationData>('/assets/mocks/greencore-locations.json')
      .pipe(map((res) => res?.Greencore_UK_Locations || []));
  }
}
