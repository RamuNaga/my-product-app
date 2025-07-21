import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { InputFieldComponent } from '../form-controls/input-field.component';
import { MatButtonModule } from '@angular/material/button';
import { ProductImageUploadComponent } from '../form-controls/product-image-upload.component';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MaterialLoaderComponent } from '../loader/loader.component';
import {
  HttpService,
  ProductCreateResponse,
  ProductListStore,
  ProductStore,
  RuntimeConfigStore,
} from '@my-product-app/frontend-shared';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'lib-product-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    InputFieldComponent,
    MatButtonModule,
    MatSnackBarModule,
    ProductImageUploadComponent,
    MaterialLoaderComponent,
  ],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductFormComponent {
  readonly runtimeConfigStore = inject(RuntimeConfigStore);
  readonly resetImageTrigger = signal(0);
  private readonly fb = inject(FormBuilder);
  readonly productStore = inject(ProductStore);
  readonly httpService = inject(HttpService);
  private readonly snackBar = inject(MatSnackBar);
  readonly productListStore = inject(ProductListStore);

  readonly productForm: FormGroup = this.fb.group({
    productcode: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });

  readonly productImageUploadUrl = computed(
    () => `${this.runtimeConfigStore.apiUrl()}/products/upload`
  );

  constructor() {
    this.productForm.get('productcode')?.valueChanges.subscribe((value) => {
      this.productStore.updateField('productcode', value);
    });

    this.productForm.get('name')?.valueChanges.subscribe((value) => {
      this.productStore.updateField('name', value);
    });

    this.productForm.get('description')?.valueChanges.subscribe((value) => {
      this.productStore.updateField('description', value);
    });
  }

  get productcodeControl(): FormControl {
    return this.productForm.get('productcode') as FormControl;
  }

  get nameControl(): FormControl {
    return this.productForm.get('name') as FormControl;
  }

  get descriptionControl(): FormControl {
    return this.productForm.get('description') as FormControl;
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
      console.log('res.data===', res.data);
      this.productListStore.addProduct(res.data); // use .data instead of .product
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
