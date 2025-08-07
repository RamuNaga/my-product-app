import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
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
import { AuthService } from '@my-product-app/frontend-data-access';
import {
  CompanyType,
  CreateCompanyInput,
  CreateLocationInput,
  CreateUserInput,
  RegisterCompanyUserInput,
  UserRole,
} from '@my-product-app/frontend-graphql-types';

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
  readonly authService = inject(AuthService);
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
      const { company, location, user } = this.signupForm.value;

      // Ensure password matches
      if (user?.password !== user?.confirmPassword) {
        console.error(' Passwords do not match');
        return;
      }

      // Strip confirmPassword before sending
      const cleanUser = { ...user };
      delete cleanUser.confirmPassword;

      const roleStr = (cleanUser.role ?? 'STAFF').toUpperCase();
      // if (!Object.keys(UserRole).includes(roleStr)) {
      //   console.error(' Invalid user role:', roleStr);
      //   return;
      // }
      cleanUser.role = roleStr as UserRole;

      const cleanCompany = { ...company };

      const typeStr = (cleanCompany.type ?? 'MANUFACTURER').toUpperCase();

      cleanCompany.type = typeStr as CompanyType;

      const registerCompanyUserInput: RegisterCompanyUserInput = {
        company: cleanCompany as CreateCompanyInput,
        location: location as CreateLocationInput, // companyId will be added in backend
        user: cleanUser as CreateUserInput, // companyId will be added in backend
      };

      this.authService
        .registerCompanyUser({ registerCompanyUserInput })
        .subscribe({
          next: (success) => {
            if (success) {
              console.log('Company user registered successfully!');
            } else {
              console.error('Registration failed.');
            }
          },
          error: (err) => {
            console.error('Error registering company user:', err);
          },
        });
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
