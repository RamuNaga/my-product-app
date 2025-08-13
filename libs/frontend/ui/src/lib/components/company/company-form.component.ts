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
  selector: 'lib-ui-company-form',
  standalone: true,
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    InputFieldComponent,
    SelectFieldComponent,
  ],
})
export class CompanyFormComponent {
  private readonly optionsService = inject(OptionsService);
  private readonly store = inject(SignupFormStore);

  loadingOptions = signal(true);
  companyTypes = signal<Option[]>([]);

  get companyGroup(): FormGroup {
    return this.store.companyFormGroup;
  }

  constructor() {
    this.loadCompanyTypes();
  }

  private loadCompanyTypes() {
    this.loadingOptions.set(true);

    this.optionsService
      .getOptions()
      .pipe(
        tap((data) => {
          this.companyTypes.set(data.companyTypes || []);
          this.loadingOptions.set(false);
        })
      )
      .subscribe({
        error: () => this.loadingOptions.set(false),
      });
  }
}
