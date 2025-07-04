import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lib-ui-product-image-upload',
  standalone: true,
  template: `<input type="file" (change)="onFileSelected($event)" />`,
})
export class ProductImageUploadComponent {
  @Input() uploadUrl = '';
  @Input() formData!: Record<string, any>;

  @Output() imageUploaded = new EventEmitter<string>();

  private selectedFile: File | null = null;

  constructor(private http: HttpClient) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  /** 👇 Manually called by parent on submit */
  uploadFile(): Promise<string> {
    return new Promise((resolve, reject) => {
      if (!this.selectedFile) {
        return reject('No file selected');
      }

      const uploadData = new FormData();
      uploadData.append('file', this.selectedFile);

      if (this.formData) {
        for (const key of Object.keys(this.formData)) {
          uploadData.append(key, this.formData[key]);
        }
      }

      this.http.post(this.uploadUrl, uploadData).subscribe({
        next: (res: any) => {
          const imagePath = res?.imagePath ?? res?.image ?? null;
          if (imagePath) {
            this.imageUploaded.emit(imagePath);
            resolve(imagePath);
          } else {
            reject('Image path missing in response');
          }
        },
        error: (err) => {
          console.error('Upload error:', err);
          reject(err);
        },
      });
    });
  }
}
