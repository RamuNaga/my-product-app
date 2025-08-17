import { Component, inject, signal, effect } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
  LoginStore,
  MaterialModule,
  ProductStore,
} from '@my-product-app/frontend-shared';
import { InputFieldComponent } from '../form-controls/input-field.component';
import { SelectFieldComponent } from '../form-controls/select-field.component';
import { MaterialLoaderComponent } from '../loader/loader.component';
import { WorkOrderFormService } from '@my-product-app/frontend-data-access';

import { tap } from 'rxjs';

export type Option = { label: string; value: string };

@Component({
  selector: 'lib-create-workorder-form',
  templateUrl: './create-workorder-form.component.html',
  styleUrls: ['./create-workorder-form.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    InputFieldComponent,
    SelectFieldComponent,
    MaterialLoaderComponent,
  ],
})
export class CreateWorkOrderFormComponent {
  titleLabel = 'Work Order';

  private readonly workOrderFormService = inject(WorkOrderFormService);
  private readonly productStore = inject(ProductStore);
  private readonly loginStore = inject(LoginStore);

  // FormGroup signal
  form = signal(
    new FormGroup({
      productId: new FormControl<number | null>(null, [Validators.required]),
      clientLocation: new FormControl<string | null>(null, [
        Validators.required,
      ]),
      vendorOrClient: new FormControl<string | null>(null, [
        Validators.required,
      ]),
      quantity: new FormControl<number | null>(null, [
        Validators.required,
        Validators.min(1),
      ]),
      deliveryDate: new FormControl<Date | null>(null, [Validators.required]),
      description: new FormControl<string | null>(null),
    })
  );

  // Dropdown data signals
  vendorsAndClients = signal<Option[]>([]);
  greencoreLocations = signal<Option[]>([]);

  // Loading states
  loadingVendors = signal(true);
  loadingLocations = signal(true);

  constructor() {
    // Auto-fill product details from ProductStore
    effect(() => {
      const product = this.productStore.product();
      if (product && product.name) {
        this.form().patchValue({
          productId: product.id ?? null,
          description: product.description || product.name,
        });
      }
    });

    // Fetch vendors & clients
    this.workOrderFormService
      .getVendorsAndClients()
      .pipe(tap(() => this.loadingVendors.set(true)))
      .subscribe({
        next: (data: Option[]) => {
          this.vendorsAndClients.set(data);
          this.loadingVendors.set(false);
        },
        error: () => this.loadingVendors.set(false),
      });

    // Use companyLocations from LoginStore for clientLocation dropdown
    effect(() => {
      const locations = this.loginStore.companyLocation();
      if (locations && Array.isArray(locations)) {
        const options: Option[] = locations.map((loc) => ({
          label: loc.location,
          value: String(loc.id),
        }));
        this.greencoreLocations.set(options);
      }
      this.loadingLocations.set(false);
    });
  }

  onSubmit() {
    if (this.form().invalid) {
      this.form().markAllAsTouched();
      return;
    }
    const formValue = this.form().value;
    console.log('Submitting WorkOrder form:', formValue);
    // TODO: Call service to create work order
  }
}
