import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ItemFacade, MaterialModule } from '@my-product-app/frontend-shared';
import {
  CreateItemInput,
  CreateItemsInput,
  ItemKind,
  SupplyType,
  ProcessType,
  UnitOfMeasure,
} from '@my-product-app/frontend-graphql-types';

function createItemRow() {
  return new FormGroup({
    name: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.maxLength(255)],
    }),
    kind: new FormControl<ItemKind | null>(null, Validators.required),
    supplyType: new FormControl<SupplyType | null>(null, Validators.required),
    processType: new FormControl<ProcessType | null>(null, Validators.required),
    baseUnit: new FormControl<UnitOfMeasure | null>(null, Validators.required),
    description: new FormControl('', { nonNullable: true }),
    allergenDeclaration: new FormControl('', { nonNullable: true }),
    origin: new FormControl('', { nonNullable: true }),
    manufacturer: new FormControl('', { nonNullable: true }),
    defaultSupplierId: new FormControl<number | null>(null, [
      Validators.min(1),
      Validators.pattern(/^[1-9]\d*$/),
    ]),
    packSizeDescription: new FormControl('', { nonNullable: true }),
    netContentDescription: new FormControl('', { nonNullable: true }),
  });
}

type ItemRowForm = ReturnType<typeof createItemRow>;

@Component({
  selector: 'lib-item-bulk-create',
  standalone: true,
  imports: [ReactiveFormsModule, MaterialModule, RouterLink],
  templateUrl: './item-bulk-create.component.html',
  styleUrls: ['./item-bulk-create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemBulkCreateComponent {
  readonly facade = inject(ItemFacade);

  private readonly router = inject(Router);
  private readonly snackBar = inject(MatSnackBar);

  readonly maxItems = 100;

  readonly itemKinds = Object.values(ItemKind);
  readonly supplyTypes = Object.values(SupplyType);
  readonly processTypes = Object.values(ProcessType);
  readonly units = Object.values(UnitOfMeasure);

  readonly rows = new FormArray<ItemRowForm>([createItemRow()]);

  readonly form = new FormGroup({
    items: this.rows,
  });

  addRow(): void {
    if (this.facade.saving() || this.rows.length >= this.maxItems) {
      return;
    }

    this.rows.push(createItemRow());
  }

  removeRow(index: number): void {
    if (this.facade.saving() || this.rows.length <= 1) {
      return;
    }

    this.rows.removeAt(index);
  }

  async onSubmit(): Promise<void> {
    if (this.facade.saving() || this.facade.loading()) {
      return;
    }

    this.form.markAllAsTouched();

    if (
      this.form.invalid ||
      this.rows.length < 1 ||
      this.rows.length > this.maxItems
    ) {
      return;
    }

    const items: CreateItemInput[] = [];

    for (const row of this.rows.controls) {
      const value = row.getRawValue();
      const name = value.name.trim();

      if (
        !name ||
        !value.kind ||
        !value.supplyType ||
        !value.processType ||
        !value.baseUnit
      ) {
        if (!name) {
          row.controls.name.setErrors({ required: true });
        }
        return;
      }

      if (
        value.defaultSupplierId !== null &&
        (!Number.isSafeInteger(value.defaultSupplierId) ||
          value.defaultSupplierId <= 0)
      ) {
        row.controls.defaultSupplierId.setErrors({ invalidInteger: true });
        return;
      }

      const item: CreateItemInput = {
        name,
        kind: value.kind,
        supplyType: value.supplyType,
        processType: value.processType,
        baseUnit: value.baseUnit,
        description: value.description.trim(),
        allergenDeclaration: value.allergenDeclaration.trim(),
        origin: value.origin.trim(),
        manufacturer: value.manufacturer.trim(),
        packSizeDescription: value.packSizeDescription.trim(),
        netContentDescription: value.netContentDescription.trim(),
      };

      if (value.defaultSupplierId !== null) {
        item.defaultSupplierId = value.defaultSupplierId;
      }

      items.push(item);
    }

    const input: CreateItemsInput = { items };

    try {
      await this.facade.createItems(input);

      this.snackBar.open(
        `${items.length} item(s) created successfully`,
        'Close',
        { duration: 4000 },
      );

      await this.router.navigate(['/home/items/list']);
    } catch {
      this.snackBar.open(
        this.facade.error() ?? 'Failed to create items',
        'Close',
        { duration: 5000 },
      );
    }
  }
}
