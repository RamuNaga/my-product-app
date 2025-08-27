import { Component, inject, signal, effect, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { DataGridComponent } from '../data-grid/data-grid.component';
import { MaterialLoaderComponent } from '../loader/loader.component';
import { InputFieldComponent } from '../form-controls/input-field.component';
import { SelectFieldComponent } from '../form-controls/select-field.component';
import {
  LoginStore,
  WORKORDER_LIST_STORE,
} from '@my-product-app/frontend-shared';
import { Option } from '@my-product-app/frontend-data-access';
import { formatDateDDMMYYYY } from '@my-product-app/frontend-core';

export enum WorkOrderStatus {
  REQUESTED = 'REQUESTED',
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
}

@Component({
  selector: 'lib-workorder-list',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    InputFieldComponent,
    SelectFieldComponent,
    MaterialLoaderComponent,
    DataGridComponent,
  ],
  templateUrl: './workorder-list.component.html',
  styleUrls: ['./workorder-list.component.scss'],
})
export class WorkOrderListComponent {
  readonly store = inject(WORKORDER_LIST_STORE);
  readonly loginStore = inject(LoginStore);

  filterForm = new FormGroup({
    workorderCodeControl: new FormControl(''),
    clientLocationControl: new FormControl(''),
    statusControl: new FormControl(''),
  });

  // ✅ Signals for filters
  workorderCode = signal('');
  clientLocation = signal('');
  status = signal('');

  greencoreLocations = signal<Option[]>([]);
  rowData = signal<any[]>([]);
  isLoading = signal(false);

  displayedColumns: string[] = [
    'sno',
    'workOrderCode',
    'status',
    'clientLocation',
    'productName',
    'productCode',
    'deliveryDate',
  ];

  statusOptions = [
    { label: 'All', value: '' },
    ...Object.values(WorkOrderStatus).map((status) => ({
      label: status.charAt(0) + status.slice(1).toLowerCase(),
      value: status,
    })),
  ];

  @ViewChild(DataGridComponent) dataGrid!: DataGridComponent;

  constructor() {
    // Sync locations from login store
    effect(() => {
      const locations = this.loginStore.companyLocation() || [];
      this.greencoreLocations.set(
        locations.map((loc: { location: any }) => ({
          label: loc.location,
          value: loc.location,
        }))
      );
    });

    // ✅ Sync form controls to signals
    this.filterForm
      .get('workorderCodeControl')!
      .valueChanges.subscribe((v) => this.workorderCode.set(v || ''));
    this.filterForm
      .get('clientLocationControl')!
      .valueChanges.subscribe((v) => this.clientLocation.set(v || ''));
    this.filterForm
      .get('statusControl')!
      .valueChanges.subscribe((v) => this.status.set(v || ''));

    // ✅ Effect to trigger API call when any filter changes
    effect(() => {
      this.store.setFilter('workOrderCode', this.workorderCode());
      this.store.setFilter('clientLocation', this.clientLocation());
      this.store.setFilter('status', this.status());

      this.loadWorkorders();
    });
  }

  async loadWorkorders() {
    this.isLoading.set(true);
    await this.store.fetchWorkorders();

    this.rowData.set(
      this.store.workorders().map((wo, i) => ({
        sno: i + 1,
        workOrderCode: wo.workOrderCode,
        status: wo.status,
        clientLocation: wo.clientLocation,
        productName: wo?.product?.name,
        productCode: wo?.product?.productCode,
        deliveryDate: formatDateDDMMYYYY(wo.deliveryDate),
      }))
    );

    this.isLoading.set(false);
  }

  onFilterChange() {
    const filterString = Object.values(this.filterForm.value)
      .join(' ')
      .toLowerCase();
    this.dataGrid?.applyFilter(filterString);
  }

  exportToCSV() {
    const rows = this.rowData();
    if (!rows.length) return;

    const csv =
      Object.keys(rows[0]).join(',') +
      '\n' +
      rows.map((r) => Object.values(r).join(',')).join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'workorders.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  }

  /**  Actions from DataGrid */
  onEdit(workorder: any) {
    console.log('Edit clicked:', workorder);
    // Navigate or open edit dialog
  }

  onDelete(workorder: any) {
    console.log('Delete clicked:', workorder);
    // Confirm & delete logic
  }

  onApprove(workorder: any) {
    console.log('Approve clicked:', workorder);
    if (workorder.status !== WorkOrderStatus.REQUESTED) {
      console.warn('Cannot approve unless status is REQUESTED.');
      return;
    }
    // Open approval dialog or perform status change
  }
}
