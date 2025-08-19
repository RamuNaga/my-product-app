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
import {
  WorkOrderFormService,
  WorkorderService,
} from '@my-product-app/frontend-data-access';
import { tap, firstValueFrom } from 'rxjs';
import { DatePickerFieldComponent } from '../form-controls/date-picker-field.component';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    DatePickerFieldComponent,
  ],
})
export class CreateWorkOrderFormComponent {
  titleLabel = 'Work Order';

  private readonly workorderService = inject(WorkorderService);
  private readonly workOrderFormService = inject(WorkOrderFormService);
  private readonly productStore = inject(ProductStore);
  private readonly loginStore = inject(LoginStore);
  private readonly snackBar = inject(MatSnackBar);

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
  submitting = signal(false);

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
      .getVendorsAndClients() // Or replace with proper vendors API
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
          value: loc.location,
        }));
        this.greencoreLocations.set(options);
      }
      this.loadingLocations.set(false);
    });
  }

  async onSubmit() {
    if (this.form().invalid) {
      this.form().markAllAsTouched();
      this.showSnackbar('Please fill all required fields.', 'snackbar-warning');
      return;
    }

    const {
      productId,
      clientLocation,
      vendorOrClient,
      quantity,
      deliveryDate,
      description,
    } = this.form().value;

    if (
      !productId ||
      !quantity ||
      !deliveryDate ||
      !clientLocation ||
      !vendorOrClient
    ) {
      this.showSnackbar('Missing required fields.', 'snackbar-warning');
      return;
    }

    const payload = {
      productId,
      clientLocation,
      vendorOrClient,
      quantity: Number(quantity),
      deliveryDate: deliveryDate.toISOString(),
      description,
    };

    this.submitting.set(true);

    try {
      const res = await firstValueFrom(
        this.workorderService.createWorkOrder(payload)
      );
      this.handleResponse(res);
    } catch (err: unknown) {
      console.error('Error creating WorkOrder:', err);
      this.showSnackbar(
        (err as any)?.message ||
          'Failed to create Work Order. Please try again.',
        'snackbar-error'
      );
    } finally {
      this.submitting.set(false);
    }
  }

  private handleResponse(res: any) {
    if (!res) {
      this.showSnackbar('Failed to submit work order.', 'snackbar-error');
      return;
    }

    this.form().reset();
    this.showSnackbar('Work Order submitted successfully!', 'snackbar-success');
  }

  private showSnackbar(message: string, panelClass: string) {
    this.snackBar.open(message, 'Close', {
      duration: 5000,
      panelClass: [panelClass],
    });
  }
}
