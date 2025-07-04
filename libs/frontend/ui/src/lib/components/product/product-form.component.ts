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
import { HttpClient } from '@angular/common/http';

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

  productForm: FormGroup;

  isLoading = signal(false);
  resetImageTrigger = signal(0);
  selectedFile = signal<File | null>(null);
  imageUrl = signal<string | null>(null);

  private readonly http = inject(HttpClient);

  productCodeControl = new FormControl('', [Validators.required]);
  nameControl = new FormControl('', [Validators.required]);
  descriptionControl = new FormControl('', [Validators.required]);

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      productcode: this.productCodeControl,
      name: this.nameControl,
      description: this.descriptionControl,
    });
  }

  productImageUploadUrl = computed(() => {
    return `${this.uploadBaseUrl()}/products/upload`;
  });

  onFileSelected(event: File | string) {
    if (event instanceof File) {
      this.selectedFile.set(event);
    } else {
      this.imageUrl.set(event);
    }
  }

  async onSubmit() {
    if (this.productForm.valid && this.selectedFile()) {
      this.isLoading.set(true);

      const formValue = this.productForm.value;
      const uploadData = new FormData();
      uploadData.append('file', this.selectedFile()!);

      for (const key in formValue) {
        if (Object.prototype.hasOwnProperty.call(formValue, key)) {
          uploadData.append(key, formValue[key]);
        }
      }

      try {
        const res = await this.http
          .post<Record<string, unknown>>(
            this.productImageUploadUrl(),
            uploadData
          )
          .toPromise();

        console.log('Submitted successfully:', res);
        this.productForm.reset();
        this.selectedFile.set(null);
        this.resetImageTrigger.update((v) => v + 1);
      } catch (error) {
        console.error('Submission failed', error);
      } finally {
        this.isLoading.set(false);
      }
    }
  }
}
