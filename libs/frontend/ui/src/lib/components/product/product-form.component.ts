import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
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
import { MaterialLoaderComponent } from '../loader/loader.component';
import {
  HttpService,
  ProductResponse,
  ProductStore,
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
    ProductImageUploadComponent,
    MaterialLoaderComponent,
  ],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductFormComponent {
  uploadBaseUrl = input<string>('');
  readonly resetImageTrigger = signal(0);
  private readonly fb = inject(FormBuilder);
  readonly productStore = inject(ProductStore);
  readonly httpService = inject(HttpService);

  readonly productForm: FormGroup = this.fb.group({
    productcode: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });

  readonly productImageUploadUrl = computed(
    () => `${this.uploadBaseUrl()}/products/upload`
  );

  // constructor() {
  // // Convert form.valueChanges Observable into a signal with the current form value as initial
  // const formValueSignal = toSignal(this.productForm.valueChanges, {
  //   initialValue: this.productForm.value,
  // });

  // effect(() => {
  //   const value = formValueSignal();

  //   // Update productStore fields whenever form changes
  //   this.productStore.updateField('productcode', value.productcode);
  //   this.productStore.updateField('name', value.name);
  //   this.productStore.updateField('description', value.description);
  // });

  constructor() {
    // Sync form changes with store
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
    if (this.productForm.valid && this.productStore.selectedFile()) {
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
          this.httpService.post<ProductResponse>(
            this.productImageUploadUrl(),
            uploadData
          )
        );

        console.log('Submitted successfully:', res);
        this.productForm.reset();
        this.productStore.reset();
      } catch (err) {
        console.error('Submission failed:', err);
      } finally {
        this.productStore.setLoading(false);
      }
    }
  }
}
