import { Component, inject, OnInit, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MaterialModule } from '@my-product-app/frontend-shared';

import { tap } from 'rxjs';
import { InputFieldComponent } from '../form-controls/input-field.component';
import { SelectFieldComponent } from '../form-controls/select-field.component';
import { WorkOrderFormService } from '@my-product-app/frontend-data-access';
import { MaterialLoaderComponent } from '../loader/loader.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

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
export class CreateWorkOrderFormComponent implements OnInit {
  readonly route = inject(ActivatedRoute);
  readonly workOrderFormService: WorkOrderFormService =
    inject(WorkOrderFormService);

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
      productWeight: new FormControl<string | null>(null, [
        Validators.required,
      ]),
      deliveryDate: new FormControl<Date | null>(null, [Validators.required]),
      description: new FormControl<string | null>(null),
    })
  );

  // Dropdown data signals
  vendorsAndClients = signal<{ label: string; value: string }[]>([]);
  greencoreLocations = signal<{ label: string; value: string }[]>([]);

  // Loading states
  loadingVendors = signal(true);
  loadingLocations = signal(true);

  constructor() {
    // Fetch vendors & clients
    const productId = Number(
      this.route.snapshot.queryParamMap.get('productId')
    );
    const productName = this.route.snapshot.queryParamMap.get('productName');
    if (productId) {
      this.form().patchValue({
        productId,
        description: productName || '',
      });
    }
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

    // Fetch Greencore locations
    this.workOrderFormService
      .getGreencoreLocations()
      .pipe(tap(() => this.loadingLocations.set(true)))
      .subscribe({
        next: (data: Option[]) => {
          this.greencoreLocations.set(data);
          this.loadingLocations.set(false);
        },
        error: () => this.loadingLocations.set(false),
      });
  }
  ngOnInit() {
    console.log();
  }

  onSubmit() {
    if (this.form().invalid) {
      this.form().markAllAsTouched();
      return;
    }
    const formValue = this.form().value;
    console.log('Submitting WorkOrder form:', formValue);
    // TODO: Call service to create workorder
  }
}
