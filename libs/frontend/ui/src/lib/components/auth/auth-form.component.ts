import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

import { LoginComponent } from './login.component';
import { TailwindHostComponent } from '../tailwind-host/tailwind-host.component';
import { SignupStepperComponent } from './signup-stepper.component';
import { MaterialModule } from '@my-product-app/frontend-shared';
import { CompanyFormComponent } from '../company/company-form.component';
import { LocationFormComponent } from '../location/location-form.component';
import { UserFormComponent } from '../user/user-form.component';

@Component({
  selector: 'lib-auth-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    LoginComponent,
    TailwindHostComponent,
    SignupStepperComponent,
    CompanyFormComponent,
    LocationFormComponent,
    UserFormComponent,
  ],
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthFormComponent {
  selectedTabIndex = 0;

  // Company form controls matching Prisma Company model
  readonly companyGroup = new FormGroup({
    name: new FormControl('Greencore', Validators.required), // companyNameControl => name
    type: new FormControl('', Validators.required), // companyTypeControl => type
    contact: new FormControl('+353 1 605 1000', Validators.required), // companyContactControl => contact
  });

  // Location form controls matching Prisma CompanyLocation model
  readonly locationGroup = new FormGroup({
    location: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required), // companyAddressControl => address
    city: new FormControl(''), // companyCityControl => city
    country: new FormControl(''), // companyCountryControl => country
    postalCode: new FormControl(''), // companyPostcodeControl => postalCode
    county: new FormControl(''), // companyCountyControl => county
    contact: new FormControl(''), // companyContactControl => contact
    // Removed companyLocationControl - no matching field in schema, or if it represents something else, clarify
  });

  // User form controls matching Prisma User model
  readonly userGroup = new FormGroup({
    username: new FormControl('', Validators.required), // usernameControl => username
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required), // Not in schema but needed for confirmation
    role: new FormControl('STAFF', Validators.required),
  });

  readonly signupForm = new FormGroup({
    company: this.companyGroup,
    location: this.locationGroup,
    user: this.userGroup,
  });

  // Signals for binding in the stepper component
  readonly signupFormSignal = signal(this.signupForm);
  readonly companyGroupSignal = signal(this.companyGroup);
  readonly locationGroupSignal = signal(this.locationGroup);
  readonly userGroupSignal = signal(this.userGroup);

  handleFormSubmit(): void {
    if (this.signupForm.valid) {
      console.log(' Signup form submitted:', this.signupForm.value);
      // Trigger API call or service action here
    } else {
      this.markAllAsTouched(this.signupForm);
    }
  }

  private markAllAsTouched(group: FormGroup) {
    Object.values(group.controls).forEach((control) => {
      if (control instanceof FormGroup) {
        this.markAllAsTouched(control);
      } else {
        control.markAsTouched();
      }
    });
  }

  switchToSignup() {
    this.selectedTabIndex = 1;
  }

  switchToLogin() {
    this.selectedTabIndex = 0;
  }
}
