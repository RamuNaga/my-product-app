import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { TailwindHostComponent } from '../tailwind-host/tailwind-host.component';
import { SignupStepperComponent } from './signup-stepper.component';
import {
  MaterialModule,
  SignupFormStore,
} from '@my-product-app/frontend-shared';
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
import { MatSnackBar } from '@angular/material/snack-bar';

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
  readonly signupStore = inject(SignupFormStore);
  readonly snackBar = inject(MatSnackBar);

  selectedTabIndex = 0;

  constructor() {
    // Initialize the root form & child groups in the store on component creation
    this.signupStore.initForm();
  }

  get signupForm() {
    return this.signupStore.signupForm()!;
  }

  get companyGroup() {
    return this.signupStore.companyGroup()!;
  }

  get locationGroup() {
    return this.signupStore.locationGroup()!;
  }

  get userGroup() {
    return this.signupStore.userGroup()!;
  }

  get existingCompanyControl() {
    return this.signupStore.existingCompanyControl()!;
  }

  get isNewCompany() {
    return this.signupStore.isNewCompany();
  }

  handleFormSubmit(): void {
    const form = this.signupForm;
    if (!form) return;

    if (!this.isFormValidForSubmission(form)) return;

    const payload = this.buildRegisterPayload(form.value);

    this.submitRegistration(payload);
  }

  /**
   * Validates the form before submission.
   * Returns `true` if form is valid, `false` otherwise.
   */
  private isFormValidForSubmission(form: any): boolean {
    if (!form.valid) {
      this.markAllAsTouched(form);
      return false;
    }

    const { user, existingCompany } = form.value;

    if (!this.isNewCompany && !existingCompany) {
      this.existingCompanyControl.markAsTouched();
      return false;
    }

    if (user?.password !== user?.confirmPassword) {
      this.showErrorSnackbar('Passwords do not match');
      return false;
    }

    return true;
  }

  /**
   * Builds the API payload for registration based on form values.
   */
  private buildRegisterPayload(formValue: any): RegisterCompanyUserInput {
    const { company, location, user, existingCompany } = formValue;

    const cleanUser = { ...user };
    delete cleanUser.confirmPassword;
    cleanUser.role = (cleanUser.role ?? 'STAFF').toUpperCase() as UserRole;

    if (this.isNewCompany) {
      const cleanCompany = { ...company };
      cleanCompany.type = (
        cleanCompany.type ?? 'MANUFACTURER'
      ).toUpperCase() as CompanyType;

      return {
        company: cleanCompany as CreateCompanyInput,
        location: location as CreateLocationInput,
        user: cleanUser as CreateUserInput,
      };
    } else {
      return {
        company: null as any,
        location: location as CreateLocationInput,
        user: cleanUser as CreateUserInput,
        existingCompanyId: existingCompany?.id,
      };
    }
  }

  /**
   * Submits the registration request and handles responses.
   */
  private submitRegistration(payload: RegisterCompanyUserInput): void {
    this.authService
      .registerCompanyUser({ registerCompanyUserInput: payload })
      .subscribe({
        next: (success) => {
          if (success) {
            this.handleSuccessfulRegistration();
          } else {
            this.showErrorSnackbar('Registration failed.');
          }
        },
        error: (err) => {
          console.error('Error registering company user:', err);
          this.showErrorSnackbar('Error registering company user.');
        },
      });
  }

  /**
   * Handles the UI updates after successful registration.
   */
  private handleSuccessfulRegistration(): void {
    this.showSuccessSnackbar('Company user registered successfully!');
    this.resetSignupForm();
    this.switchToLogin();
  }

  /**
   * Resets all signup form values and reinitializes store state.
   */
  private resetSignupForm(): void {
    this.signupForm.reset();
    this.signupStore.initForm();
  }

  /**
   * Snackbar helpers
   */
  private showSuccessSnackbar(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      panelClass: ['snackbar-success'],
    });
  }

  private showErrorSnackbar(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      panelClass: ['snackbar-error'],
    });
  }

  private markAllAsTouched(group: any) {
    if (!group) return;
    if ('controls' in group) {
      Object.values(group.controls).forEach((control: any) => {
        this.markAllAsTouched(control);
      });
    } else if ('markAsTouched' in group) {
      group.markAsTouched();
    }
  }

  switchToSignup() {
    this.selectedTabIndex = 1;
  }

  switchToLogin() {
    this.selectedTabIndex = 0;
  }
}
