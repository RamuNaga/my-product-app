import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
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

@Component({
  selector: 'lib-product-form',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    InputFieldComponent,
    MatButtonModule,
    ProductImageUploadComponent,
  ],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductFormComponent implements OnInit {
  @Input() uploadBaseUrl = '';

  productForm: FormGroup;
  imageUrl: string | null = null;

  productCodeControl = new FormControl('', [Validators.required]);
  nameControl = new FormControl('', [Validators.required]);
  descriptionControl = new FormControl('', [Validators.required]);

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      productcode: this.productCodeControl,
      name: this.nameControl,
      description: this.descriptionControl,
    });
    console.log(
      'constructor ProductFormComponent   this.uploadBaseUrl======',
      this.uploadBaseUrl,
      this.productImageUploadUrl
    );
  }

  get productImageUploadUrl(): string {
    return `${this.uploadBaseUrl}/products/upload`;
  }

  ngOnInit(): void {
    console.log(
      'ngOnInit ProductFormComponent.uploadBaseUrl:',
      this.uploadBaseUrl,
      this.productImageUploadUrl
    );
  }

  onImageUploaded(url: string) {
    this.imageUrl = url;
    console.log('this.imageUrl', this.imageUrl);
  }

  onSubmit(imageUploader: ProductImageUploadComponent) {
    if (this.productForm.invalid) {
      console.warn('Form invalid');
      return;
    }

    imageUploader
      .uploadFile()
      .then((imageUrl: string) => {
        const formValue = this.productForm.value;

        const payload = {
          ...formValue,
          image: imageUrl,
        };

        console.log('Submitting product:', payload);

        // TODO: Send this payload to backend (GraphQL or REST)
      })
      .catch((err) => {
        console.error('Image upload failed:', err);
      });
  }
}
