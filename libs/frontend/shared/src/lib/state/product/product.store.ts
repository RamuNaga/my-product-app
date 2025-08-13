import { Injectable, signal } from '@angular/core';
import { ProductFormModel as Product } from './product.model';

@Injectable({ providedIn: 'root' })
export class ProductStore {
  readonly product = signal<Product>({
    productCode: '',
    name: '',
    description: '',
    image: '',
    productWeight: '',
    price: 0,
  });

  selectedFile = signal<File | null>(null);
  isLoading = signal(false);
  resetTrigger = signal(0);

  updateField<K extends keyof Product>(key: K, value: Product[K]) {
    this.product.update((p) => ({ ...p, [key]: value }));
  }

  updateFields(values: Partial<Product>) {
    this.product.update((p) => ({ ...p, ...values }));
  }

  setProduct(product: Product) {
    this.product.set(product);
  }

  reset() {
    this.product.set({
      productCode: '',
      name: '',
      description: '',
      image: '',
      productWeight: '',
      price: 0,
    });
    this.selectedFile.set(null);
    this.resetImage();
  }

  setFile(file: File | null) {
    this.selectedFile.set(file);
  }

  setLoading(value: boolean) {
    this.isLoading.set(value);
  }

  resetImage() {
    this.resetTrigger.update((v) => v + 1);
  }
}
