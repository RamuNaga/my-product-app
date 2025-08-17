import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputFieldComponent } from '../form-controls/input-field.component';
import { ProductImageUploadComponent } from '../form-controls/product-image-upload.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MaterialLoaderComponent } from '../loader/loader.component';
import {
  MaterialModule,
  ProductCreateResponse,
  ProductListStore,
  ProductStore,
} from '@my-product-app/frontend-shared';
import { HttpService, RuntimeConfigStore } from '@my-product-app/frontend-core';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'lib-product-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    InputFieldComponent,
    ProductImageUploadComponent,
    MaterialLoaderComponent,
  ],
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductFormComponent {
  titleLabel = 'Create product';
  private readonly fb = inject(FormBuilder);
  readonly productStore = inject(ProductStore);
  private readonly runtimeConfigStore = inject(RuntimeConfigStore);
  private readonly httpService = inject(HttpService);
  private readonly snackBar = inject(MatSnackBar);
  private readonly productListStore = inject(ProductListStore);

  readonly productForm: FormGroup = this.fb.group({
    productCode: ['', Validators.required],
    name: ['', Validators.required],
    description: [''],
    productWeight: [''],
    price: ['', Validators.required],
  });

  readonly productImageUploadUrl = computed(
    () => `${this.runtimeConfigStore.apiUrl()}/products/upload`
  );

  constructor() {
    // Sync form changes to store
    this.productForm.valueChanges.subscribe((value) => {
      this.productStore.updateFields(value);
    });
  }

  onFileSelected(event: { file: File; previewUrl: string } | string) {
    if (typeof event === 'string') {
      this.productStore.updateField('image', event);
    } else {
      this.productStore.setFile(event.file);
      this.productStore.updateField('image', event.previewUrl);
    }
  }

  async onSubmit() {
    if (!this.isFormValid()) return;

    this.productStore.setLoading(true);

    const formData = this.buildFormData();

    try {
      const res = await firstValueFrom(
        this.httpService.post<ProductCreateResponse>(
          this.productImageUploadUrl(),
          formData
        )
      );

      this.handleResponse(res);
    } catch (err: unknown) {
      const message =
        (err as any)?.error?.message ||
        'Something went wrong. Please try again.';
      this.showSnackbar(message, 'snackbar-error');
      console.error('Submission failed:', err);
    } finally {
      this.productStore.setLoading(false);
    }
  }

  private isFormValid(): boolean {
    if (!this.productForm.valid) {
      this.showSnackbar('Please fill all required fields.', 'snackbar-warning');
      return false;
    }

    if (!this.productStore.selectedFile()) {
      this.showSnackbar('Please upload a product image.', 'snackbar-warning');
      return false;
    }

    return true;
  }

  private buildFormData(): FormData {
    const uploadData = new FormData();
    uploadData.append('file', this.productStore.selectedFile()!);

    const product = this.productStore.product();
    Object.entries(product).forEach(([key, value]) => {
      if (key !== 'image' && value != null) {
        uploadData.append(key, value.toString());
      }
    });

    return uploadData;
  }

  private handleResponse(res: ProductCreateResponse) {
    if (res.status === 'error') {
      this.showSnackbar(
        res.message || 'Failed to submit product.',
        'snackbar-error'
      );
      return;
    }
    if (res.status === 'success' && res.data) {
      this.productListStore.addProduct(res.data);
    }

    this.productForm.reset();
    this.productStore.reset();
    this.showSnackbar('Product submitted successfully!', 'snackbar-success');
  }

  private showSnackbar(message: string, panelClass: string) {
    this.snackBar.open(message, 'Close', {
      duration: 5000,
      panelClass: [panelClass],
    });
  }
}
