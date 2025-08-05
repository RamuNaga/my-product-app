import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  effect,
  inject,
  input,
  signal,
} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@my-product-app/frontend-shared';
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

  loadingOptions = signal(true);
  locations = signal<Option[]>([]);

  readonly formGroup = input<FormGroup>();

  private locationData: Location[] = [];

  // Computed getters for each control
  readonly locationControl = computed(
    () => this.formGroup()?.get('location') as FormControl
  );
  readonly addressControl = computed(
    () => this.formGroup()?.get('address') as FormControl
  );
  readonly cityControl = computed(
    () => this.formGroup()?.get('city') as FormControl
  );
  readonly countryControl = computed(
    () => this.formGroup()?.get('country') as FormControl
  );
  readonly postalCodeControl = computed(
    () => this.formGroup()?.get('postalCode') as FormControl
  );
  readonly countyControl = computed(
    () => this.formGroup()?.get('county') as FormControl
  );
  readonly contactControl = computed(
    () => this.formGroup()?.get('contact') as FormControl
  );

  constructor() {
    this.loadLocations();

    effect(() => {
      const fg = this.formGroup();
      if (!fg) return; // Wait until formGroup is defined

      const locationControl = fg.get('location');
      if (!locationControl) return;

      // Subscribe to valueChanges and update fields on change
      locationControl.valueChanges.subscribe((selectedLocation) => {
        const locationInfo = this.locationData.find(
          (loc) => loc.location === selectedLocation
        );

        console.log('locationInfo===', locationInfo);

        if (locationInfo) {
          fg.patchValue({
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
