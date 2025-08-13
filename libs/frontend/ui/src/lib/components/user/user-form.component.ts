import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
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
  private readonly store = inject(SignupFormStore);

  loadingOptions = signal(true);
  roles = signal<Option[]>([]);

  /** Access user form group from store */
  get userGroup(): FormGroup {
    return this.store.userFormGroup;
  }

  constructor() {
    this.loadRoles();
  }

  /** Fetch role options from API */
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
