import { Component, inject, signal } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { InputFieldComponent } from '../form-controls/input-field.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { SelectFieldComponent } from '../form-controls/select-field.component';

import {
  AuthService,
  OptionsService,
  LocationsService,
  Location,
} from '@my-product-app/frontend-data-access';
import { tap } from 'rxjs/operators';
import { MatButtonModule } from '@angular/material/button';

export type Option = { label: string; value: string };

@Component({
  selector: 'lib-ui-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    InputFieldComponent,
    SelectFieldComponent,
    MatButtonModule,
  ],
})
export class SignupComponent {
  signupForm!: FormGroup;

  roles = signal<Option[]>([]);
  companyTypes = signal<Option[]>([]);
  locations = signal<Option[]>([]);

  private locationData: Location[] = [];
  loadingOptions = signal(true);

  private readonly authService = inject(AuthService);
  private readonly optionsService = inject(OptionsService);
  private readonly locationsService = inject(LocationsService);

  constructor(private fb: FormBuilder) {
    this.initForm();
    this.loadAllOptions();
    this.setupLocationValueChanges();
  }

  private initForm() {
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      role: ['', Validators.required],
      company: this.fb.group({
        name: ['', Validators.required],
        type: ['', Validators.required],
        location: ['', Validators.required],
        address: [''],
        city: [''],
        county: [''],
        postcode: [''],
        country: [''],
        contact: [''],
      }),
    });
  }

  private loadAllOptions() {
    this.loadingOptions.set(true);

    this.optionsService
      .getOptions()
      .pipe(
        tap((data) => {
          this.roles.set(data.roles);
          this.companyTypes.set(data.companyTypes);
        })
      )
      .subscribe({
        next: () => this.loadingOptions.set(false),
        error: () => this.loadingOptions.set(false),
      });

    this.locationsService
      .getLocations()
      .pipe(
        tap((locs: Location[]) => {
          this.locationData = locs;
          this.locations.set(
            locs.map((l) => ({ label: l.location, value: l.location }))
          );
        })
      )
      .subscribe();
  }

  private setupLocationValueChanges() {
    this.companyLocationControl.valueChanges.subscribe((selectedLocation) => {
      const locationInfo = this.locationData.find(
        (loc) => loc.location === selectedLocation
      );
      if (locationInfo) {
        this.companyAddressControl.setValue(locationInfo.address);
        this.companyCityControl.setValue(locationInfo.city);
        this.companyCountyControl.setValue(locationInfo.county);
        this.companyPostcodeControl.setValue(locationInfo.postcode);
        this.companyCountryControl.setValue(locationInfo.country);
        this.companyContactControl.setValue(locationInfo.contact);
      } else {
        this.companyAddressControl.reset();
        this.companyCityControl.reset();
        this.companyCountyControl.reset();
        this.companyPostcodeControl.reset();
        this.companyCountryControl.reset();
        this.companyContactControl.reset();
      }
    });
  }

  get companyGroup(): FormGroup {
    return this.signupForm.get('company') as FormGroup;
  }

  private getControl(name: string): FormControl {
    const parts = name.split('.');
    let control: any = this.signupForm;
    for (const part of parts) {
      control = control.get(part);
      if (!control) break;
    }
    return control as FormControl;
  }

  get usernameControl(): FormControl {
    return this.getControl('username');
  }
  get emailControl(): FormControl {
    return this.getControl('email');
  }
  get passwordControl(): FormControl {
    return this.getControl('password');
  }
  get confirmPasswordControl(): FormControl {
    return this.getControl('confirmPassword');
  }
  get roleControl(): FormControl {
    return this.getControl('role');
  }
  get companyNameControl(): FormControl {
    return this.getControl('company.name');
  }
  get companyTypeControl(): FormControl {
    return this.getControl('company.type');
  }
  get companyLocationControl(): FormControl {
    return this.getControl('company.location');
  }
  get companyAddressControl(): FormControl {
    return this.getControl('company.address');
  }
  get companyCityControl(): FormControl {
    return this.getControl('company.city');
  }
  get companyCountyControl(): FormControl {
    return this.getControl('company.county');
  }
  get companyPostcodeControl(): FormControl {
    return this.getControl('company.postcode');
  }
  get companyCountryControl(): FormControl {
    return this.getControl('company.country');
  }
  get companyContactControl(): FormControl {
    return this.getControl('company.contact');
  }

  onSubmit() {
    if (this.signupForm.valid) {
      const { username, email, password, role, company } =
        this.signupForm.value;
      const createUserInput = { username, email, password, role, company };

      this.authService
        .signup({ createUserInput })
        .pipe(
          tap((user) => {
            console.log('User signed up:', user);
            // reset or navigate here
          })
        )
        .subscribe({
          error: (err) => console.error('Signup error:', err),
        });
    } else {
      this.signupForm.markAllAsTouched();
    }
  }
}
