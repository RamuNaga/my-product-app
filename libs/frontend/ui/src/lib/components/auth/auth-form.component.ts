import {
  ChangeDetectionStrategy,
  Component,
  inject,
  ViewChild,
  ViewContainerRef,
  ComponentRef,
  AfterViewInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TailwindHostComponent } from '../tailwind-host/tailwind-host.component';
import {
  MaterialModule,
  SignupFormStore,
} from '@my-product-app/frontend-shared';
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
import { SignupStepperComponent } from './signup-stepper.component';

@Component({
  selector: 'lib-auth-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    TailwindHostComponent,
  ],
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthFormComponent implements AfterViewInit {
  readonly authService = inject(AuthService);
  readonly signupStore = inject(SignupFormStore);
  readonly snackBar = inject(MatSnackBar);

  selectedTabIndex = 0;

  // Lazy-loaded login component
  loginComponent: any;

  // Reference to dynamically created stepper component
  private stepperComponentRef?: ComponentRef<SignupStepperComponent>;

  @ViewChild('signupStepperHost', { read: ViewContainerRef, static: true })
  signupStepperHost!: ViewContainerRef;

  constructor() {
    this.signupStore.initForm();
    this.loadLoginComponent();
  }

  ngAfterViewInit() {
    this.loadStepperComponent();
  }

  /** Load login component lazily */
  private async loadLoginComponent() {
    const { LoginComponent } = await import('./login.component');
    this.loginComponent = LoginComponent;
  }

  /** Dynamically load signup stepper and subscribe to submit event */
  private async loadStepperComponent() {
    const { SignupStepperComponent } = await import(
      './signup-stepper.component'
    );

    // Clear container in case of reload
    this.signupStepperHost.clear();

    // Create component dynamically
    this.stepperComponentRef = this.signupStepperHost.createComponent(
      SignupStepperComponent
    );

    // Subscribe to stepper's submitEvent
    this.stepperComponentRef.instance.submitEvent.subscribe(() => {
      this.handleFormSubmit();
    });
  }

  switchToSignup() {
    this.selectedTabIndex = 1;
  }

  switchToLogin() {
    this.selectedTabIndex = 0;
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

  /** Called when the stepper emits submitEvent */
  handleFormSubmit(): void {
    const form = this.signupForm;
    if (!form) return;

    if (!this.isFormValidForSubmission(form)) return;

    const payload = this.buildRegisterPayload(form.value);

    this.submitRegistration(payload);
  }

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

  private handleSuccessfulRegistration(): void {
    this.showSuccessSnackbar('Company user registered successfully!');
    this.resetSignupForm();
    this.switchToLogin();
  }

  private resetSignupForm(): void {
    this.signupForm.reset();
    this.signupStore.initForm();
  }

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
}
