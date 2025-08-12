import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
  MaterialModule,
  SignupFormStore,
} from '@my-product-app/frontend-shared';
import { InputFieldComponent } from '../form-controls/input-field.component';
import { SelectFieldComponent } from '../form-controls/select-field.component';
import { Option, OptionsService } from '@my-product-app/frontend-data-access';
import { tap } from 'rxjs';

@Component({
  selector: 'lib-ui-user-form',
  standalone: true,
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    InputFieldComponent,
    SelectFieldComponent,
  ],
})
export class UserFormComponent {
  private readonly optionsService = inject(OptionsService);
  private readonly signupFormStore = inject(SignupFormStore); // <-- Inject store

  loadingOptions = signal(true);
  roles = signal<Option[]>([]);

  /** Read FormGroup from store */
  get userGroup(): FormGroup {
    return this.signupFormStore.userGroup()!;
  }

  /** Computed getters for form controls */
  usernameControl = computed(
    () => this.userGroup.get('username') as FormControl<string>
  );
  emailControl = computed(
    () => this.userGroup.get('email') as FormControl<string>
  );
  passwordControl = computed(
    () => this.userGroup.get('password') as FormControl<string>
  );
  confirmPasswordControl = computed(
    () => this.userGroup.get('confirmPassword') as FormControl<string>
  );
  roleControl = computed(
    () => this.userGroup.get('role') as FormControl<string>
  );

  constructor() {
    this.loadRoles();
  }

  private loadRoles() {
    this.loadingOptions.set(true);
    this.optionsService
      .getOptions()
      .pipe(
        tap((data) => {
          this.roles.set(data.roles || []);
          this.loadingOptions.set(false);
        })
      )
      .subscribe({
        error: () => this.loadingOptions.set(false),
      });
  }
}
