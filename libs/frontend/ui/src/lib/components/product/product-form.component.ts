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
    if (!this.productForm.valid) {
      this.snackBar.open('Please fill all required fields.', 'Close', {
        duration: 3000,
        panelClass: ['snackbar-warning'],
      });
      return;
    }

    if (!this.productStore.selectedFile()) {
      this.snackBar.open('Please upload a product image.', 'Close', {
        duration: 3000,
        panelClass: ['snackbar-warning'],
      });
      return;
    }

    this.productStore.setLoading(true);

    const uploadData = new FormData();
    uploadData.append('file', this.productStore.selectedFile()!);

    const product = this.productStore.product();
    Object.entries(product).forEach(([key, value]) => {
      if (key !== 'image' && value != null) {
        uploadData.append(key, value.toString());
      }
    });

    try {
      const res = await firstValueFrom(
        this.httpService.post<ProductCreateResponse>(
          this.productImageUploadUrl(),
          uploadData
        )
      );

      console.log('Submitted successfully:', res);

      if (res.status === 'error') {
        this.snackBar.open(
          res.message || 'Failed to submit product.',
          'Close',
          {
            duration: 5000,
            panelClass: ['snackbar-error'],
          }
        );
        return;
      }

      this.productForm.reset();
      this.productStore.reset();

      this.snackBar.open('Product submitted successfully!', 'Close', {
        duration: 3000,
        panelClass: ['snackbar-success'],
      });
    } catch (err: unknown) {
      const message =
        (err as any)?.error?.message ||
        'Something went wrong. Please try again.';

      this.snackBar.open(message, 'Close', {
        duration: 5000,
        panelClass: ['snackbar-error'],
      });

      console.error('Submission failed:', err);
    } finally {
      this.productStore.setLoading(false);
    }
  }
}
