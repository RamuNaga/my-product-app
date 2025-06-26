import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'lib-ui-product-image-upload',
  standalone: true,
  template: `<input type="file" (change)="onFileSelected($event)" />`,
})
export class ProductImageUploadComponent {
  @Input() uploadUrl = '';
  @Input() formData!: Record<string, any>;

  @Output() imageUploaded = new EventEmitter<string>();

  constructor(private http: HttpClient) {}

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (!file) return;

    const uploadData = new FormData();
    uploadData.append('file', file);

    // Append extra form fields to FormData
    if (this.formData) {
      for (const key of Object.keys(this.formData)) {
        uploadData.append(key, this.formData[key]);
      }
    }

    this.http.post(this.uploadUrl, uploadData).subscribe({
      next: (res: any) => {
        console.log('Upload success', res);
        if (res && res.imagePath) {
          this.imageUploaded.emit(res.imagePath); // send image path back to parent
        }
      },
      error: (error: HttpErrorResponse) => {
        console.error('Upload failed', error);
      },
    });
  }
}
