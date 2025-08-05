import { CommonModule } from '@angular/common';
import { Component, computed, inject, input, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@my-product-app/frontend-shared';
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

  loadingOptions = signal(true);
  roles = signal<Option[]>([]);
  readonly formGroup = input<FormGroup>();

  // Computed signals for each form control
  readonly usernameControl = computed(
    () => this.formGroup()?.get('username') as FormControl<string>
  );

  readonly emailControl = computed(
    () => this.formGroup()?.get('email') as FormControl<string>
  );

  readonly passwordControl = computed(
    () => this.formGroup()?.get('password') as FormControl<string>
  );

  readonly confirmPasswordControl = computed(
    () => this.formGroup()?.get('confirmPassword') as FormControl<string>
  );

  readonly roleControl = computed(
    () => this.formGroup()?.get('role') as FormControl<string>
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
