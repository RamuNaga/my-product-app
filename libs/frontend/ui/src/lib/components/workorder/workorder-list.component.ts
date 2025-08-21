import { Component, inject, signal, effect, viewChild } from '@angular/core';
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
import { LoginStore } from '@my-product-app/frontend-shared';
import { Option } from '@my-product-app/frontend-data-access';

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
  readonly loginStore = inject(LoginStore);

  filterForm = new FormGroup({
    workorderCodeControl: new FormControl(''),
    clientLocationControl: new FormControl(''),
    statusControl: new FormControl(''),
  });

  rowData = signal<any[]>([]);
  isLoading = signal(false);
  greencoreLocations = signal<Option[]>([]);

  displayedColumns: string[] = [
    'sno',
    'workorderCode',
    'status',
    'clientLocation',
    'productName',
    'productCode',
    'deliveryDate',
  ];

  dataGrid = viewChild(DataGridComponent);

  constructor() {
    this.fetchWorkorders();

    effect(() => {
      const locations = this.loginStore.companyLocation() || [];
      this.greencoreLocations.set(
        locations.map((loc: { location: any }) => ({
          label: loc.location,
          value: loc.location,
        }))
      );
    });
  }

  fetchWorkorders() {
    this.isLoading.set(true);
    setTimeout(() => {
      this.rowData.set([
        {
          sno: 1,
          workorderCode: 'WO-001',
          status: 'Pending',
          clientLocation: 'New York',
          productName: 'Widget A',
          productCode: 'P001',
          deliveryDate: '2025-08-25',
        },
        {
          sno: 2,
          workorderCode: 'WO-002',
          status: 'Approved',
          clientLocation: 'Chicago',
          productName: 'Widget B',
          productCode: 'P002',
          deliveryDate: '2025-08-30',
        },
      ]);
      this.isLoading.set(false);
    }, 500);
  }

  onFilterChange() {
    const filterString = Object.values(this.filterForm.value)
      .join(' ')
      .toLowerCase();

    const grid = this.dataGrid();
    grid?.applyFilter(filterString);
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
}
