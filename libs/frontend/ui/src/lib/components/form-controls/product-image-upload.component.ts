import { HttpClient } from '@angular/common/http';
import {
  Component,
  effect,
  ElementRef,
  input,
  output,
  signal,
  viewChild,
} from '@angular/core';

@Component({
  selector: 'lib-ui-product-image-upload',
  standalone: true,
  template: `
    <input
      #fileInput
      type="file"
      (change)="onFileSelected($event)"
      accept="image/*"
    />
  `,
})
export class ProductImageUploadComponent {
  // ✅ Inputs as signals
  uploadUrl = input<string>('');
  formData = input<Record<string, unknown>>({});
  resetTrigger = input<number>(0);

  // ✅ ViewChild as signal accessor (Angular 17+)
  fileInput = viewChild<ElementRef<HTMLInputElement>>('fileInput');

  // ✅ Output signal
  fileSelected = output<File | string>();

  // ✅ Internal signals
  previewUrl = signal<string | null>(null);
  internalFile = signal<File | null>(null);

  constructor(private http: HttpClient) {
    // Automatically react when resetTrigger changes
    effect(() => {
      const trigger = this.resetTrigger();
      if (trigger !== 0) {
        this.clearImagePreview();
      }
    });
  }

  clearImagePreview(): void {
    console.log('clearImagePreview');
    this.previewUrl.set(null);
    this.internalFile.set(null);

    const fileInputElement = this.fileInput()?.nativeElement;
    if (fileInputElement) {
      fileInputElement.value = '';
    }
  }

  onFileSelected(event: Event): void {
    const inputEl = event.target as HTMLInputElement;
    if (inputEl.files?.length) {
      const file = inputEl.files[0];
      this.internalFile.set(file);
      this.previewUrl.set(URL.createObjectURL(file));
      this.fileSelected.emit(file); // 👈 Emit File type
    }
  }

  /** 👇 Manual upload if needed */
  uploadFile(): Promise<string> {
    return new Promise((resolve, reject) => {
      const file = this.internalFile();
      const url = this.uploadUrl();
      const form = this.formData();

      if (!file) return reject('No file selected');

      const uploadData = new FormData();
      uploadData.append('file', file);

      if (form) {
        for (const key of Object.keys(form)) {
          uploadData.append(key, form[key] as string);
        }
      }

      this.http.post(url, uploadData).subscribe({
        next: (res: any) => {
          const imagePath = res?.imagePath ?? res?.image ?? null;
          if (imagePath) {
            this.fileSelected.emit(imagePath); // 👈 Emit string if path is needed
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
