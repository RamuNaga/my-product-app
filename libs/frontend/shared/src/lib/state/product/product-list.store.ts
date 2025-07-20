import { Injectable, signal, computed } from '@angular/core';
import { ProductFormModel as Product } from './product.model';
import { ProductService } from '@my-product-app/frontend-data-access';
import { ApolloError } from '@apollo/client/errors';

@Injectable({ providedIn: 'root' })
export class ProductListStore {
  private _products = signal<Product[]>([]);
  readonly products = computed(() => this._products());

  private _isLoading = signal(false);
  readonly isLoading = computed(() => this._isLoading());

  private _error = signal<string | null>(null);
  readonly errorMessage = computed(() => this._error());

  // 👇 New deferReady signal for delayed rendering
  private _deferReady = signal(false);
  readonly isDeferReady = computed(() => this._deferReady());

  constructor(private productService: ProductService) {}

  loadProducts() {
    this._isLoading.set(true);
    this._error.set(null);
    this._deferReady.set(false); // Reset defer flag

    this.productService.findAllProducts().subscribe({
      next: (products: Product[]) => {
        this._products.set(products);
        this._isLoading.set(false);

        //  Trigger deferReady after slight delay (simulate @defer)
        setTimeout(() => this._deferReady.set(true), 200); // adjust time if needed
      },
      error: (err: ApolloError) => {
        console.error('err', err);
        this._error.set('Failed to load products');
        this._isLoading.set(false);
      },
    });
  }
}
