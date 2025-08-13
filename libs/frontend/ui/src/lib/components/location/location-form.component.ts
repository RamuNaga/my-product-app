import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
  MaterialModule,
  SignupFormStore,
} from '@my-product-app/frontend-shared';
import { InputFieldComponent } from '../form-controls/input-field.component';
import { SelectFieldComponent } from '../form-controls/select-field.component';
import {
  LocationsService,
  Location,
} from '@my-product-app/frontend-data-access';
import { tap } from 'rxjs';

export type Option = { label: string; value: string };

@Component({
  selector: 'lib-ui-location-form',
  standalone: true,
  templateUrl: './location-form.component.html',
  styleUrls: ['./location-form.component.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    InputFieldComponent,
    SelectFieldComponent,
  ],
})
export class LocationFormComponent {
  private readonly locationsService = inject(LocationsService);
  private readonly store = inject(SignupFormStore);

  loadingOptions = signal(true);
  locations = signal<Option[]>([]);

  private locationData: Location[] = [];

  /** Get the location form group from store */
  get locationGroup(): FormGroup {
    return this.store.locationFormGroup;
  }

  constructor() {
    this.loadLocations();
    this.handleLocationSelection();
  }

  /** Load locations from API and update options list */
  private loadLocations() {
    this.loadingOptions.set(true);

    this.locationsService
      .getLocations()
      .pipe(
        tap((locs: Location[]) => {
          this.locationData = locs;
          this.locations.set(
            locs.map((l) => ({ label: l.location, value: l.location }))
          );
          this.loadingOptions.set(false);
        })
      )
      .subscribe({
        error: () => this.loadingOptions.set(false),
      });
  }

  /** Auto-fill fields based on selected location */
  private handleLocationSelection() {
    const locationControl = this.locationGroup.get('location');
    if (!locationControl) return;

    locationControl.valueChanges.subscribe((selectedLocation) => {
      const locationInfo = this.locationData.find(
        (loc) => loc.location === selectedLocation
      );

      if (locationInfo) {
        this.locationGroup.patchValue({
          address: locationInfo.address || '',
          city: locationInfo.city || '',
          county: locationInfo.county || '',
          postalCode: locationInfo.postcode || '',
          country: locationInfo.country || '',
          contact: locationInfo.contact || '',
        });
      }
    });
  }
}
