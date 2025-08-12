import { CommonModule } from '@angular/common';
import { Component, computed, effect, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule, SignupFormStore } from '@my-product-app/frontend-shared';
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
  private readonly signupFormStore = inject(SignupFormStore); // <-- Inject store

  loadingOptions = signal(true);
  locations = signal<Option[]>([]);

  private locationData: Location[] = [];

  /** Form group read directly from store */
  get locationGroup(): FormGroup {
    return this.signupFormStore.locationGroup()!;
  }

  /** Computed getters for controls */
  locationControl = computed(
    () => this.locationGroup.get('location') as FormControl
  );
  addressControl = computed(
    () => this.locationGroup.get('address') as FormControl
  );
  cityControl = computed(() => this.locationGroup.get('city') as FormControl);
  countryControl = computed(
    () => this.locationGroup.get('country') as FormControl
  );
  postalCodeControl = computed(
    () => this.locationGroup.get('postalCode') as FormControl
  );
  countyControl = computed(
    () => this.locationGroup.get('county') as FormControl
  );
  contactControl = computed(
    () => this.locationGroup.get('contact') as FormControl
  );

  constructor() {
    this.loadLocations();

    effect(() => {
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
    });
  }

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
      .subscribe();
  }
}
