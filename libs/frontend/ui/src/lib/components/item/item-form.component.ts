import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ItemFacade, MaterialModule } from '@my-product-app/frontend-shared';

import {
  CreateItemInput,
  UpdateItemInput,
  ItemKind,
  SupplyType,
  ProcessType,
  UnitOfMeasure,
} from '@my-product-app/frontend-graphql-types';

@Component({
  selector: 'lib-item-form',
  standalone: true,
  imports: [ReactiveFormsModule, MaterialModule, RouterLink],
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemFormComponent implements OnInit {
  readonly facade = inject<ItemFacade>(ItemFacade);

  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly snackBar = inject(MatSnackBar);

  readonly itemKinds = Object.values(ItemKind);
  readonly supplyTypes = Object.values(SupplyType);
  readonly processTypes = Object.values(ProcessType);
  readonly units = Object.values(UnitOfMeasure);

  readonly isEditMode = this.route.snapshot.paramMap.has('id');
  readonly itemId = this.isEditMode
    ? Number(this.route.snapshot.paramMap.get('id'))
    : null;

  readonly form = new FormGroup({
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

  async ngOnInit(): Promise<void> {
    if (!this.isEditMode) {
      return;
    }

    if (
      this.itemId === null ||
      !Number.isSafeInteger(this.itemId) ||
      this.itemId <= 0
    ) {
      this.snackBar.open('Invalid item ID', 'Close', {
        duration: 5000,
      });
      await this.router.navigate(['/home/items/list']);
      return;
    }

    await this.facade.loadItemById(this.itemId);

    const item = this.facade.selectedItem();

    if (!item || item.id !== this.itemId) {
      this.snackBar.open(this.facade.error() ?? 'Item not found', 'Close', {
        duration: 5000,
      });
      await this.router.navigate(['/home/items/list']);
      return;
    }

    this.form.patchValue({
      name: item.name,
      kind: item.kind,
      supplyType: item.supplyType,
      processType: item.processType,
      baseUnit: item.baseUnit,
      description: item.description ?? '',
      allergenDeclaration: item.allergenDeclaration ?? '',
      origin: item.origin ?? '',
      manufacturer: item.manufacturer ?? '',
      defaultSupplierId: item.defaultSupplierId ?? null,
      packSizeDescription: item.packSizeDescription ?? '',
      netContentDescription: item.netContentDescription ?? '',
    });

    this.form.controls.kind.disable();
  }

  async onSubmit(): Promise<void> {
    if (this.form.invalid || this.facade.saving() || this.facade.loading()) {
      this.form.markAllAsTouched();
      return;
    }

    if (
      this.isEditMode &&
      (this.itemId === null || this.facade.selectedItem()?.id !== this.itemId)
    ) {
      return;
    }

    const value = this.form.getRawValue();

    if (
      !value.kind ||
      !value.supplyType ||
      !value.processType ||
      !value.baseUnit
    ) {
      return;
    }

    const fields = {
      name: value.name.trim(),
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

    if (!fields.name) {
      this.form.controls.name.setErrors({ required: true });
      this.form.controls.name.markAsTouched();
      return;
    }

    if (
      value.defaultSupplierId !== null &&
      !Number.isSafeInteger(value.defaultSupplierId)
    ) {
      this.form.controls.defaultSupplierId.setErrors({
        invalidInteger: true,
      });
      this.form.controls.defaultSupplierId.markAsTouched();
      return;
    }

    try {
      if (this.isEditMode) {
        const input: UpdateItemInput = {
          id: this.itemId!,
          ...fields,
        };

        if (value.defaultSupplierId !== null) {
          input.defaultSupplierId = value.defaultSupplierId;
        } else if (this.facade.selectedItem()?.defaultSupplierId != null) {
          input.clearDefaultSupplierId = true;
        }

        await this.facade.updateItem(input);

        this.snackBar.open('Item updated successfully', 'Close', {
          duration: 4000,
        });
      } else {
        const input: CreateItemInput = {
          ...fields,
          kind: value.kind,
        };

        if (value.defaultSupplierId !== null) {
          input.defaultSupplierId = value.defaultSupplierId;
        }

        await this.facade.createItem(input);

        this.snackBar.open('Item created successfully', 'Close', {
          duration: 4000,
        });
      }

      await this.router.navigate(['/home/items/list']);
    } catch {
      this.snackBar.open(
        this.facade.error() ??
          (this.isEditMode ? 'Failed to update item' : 'Failed to create item'),
        'Close',
        { duration: 5000 },
      );
    }
  }
}
