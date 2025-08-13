import { Injectable, signal, computed } from '@angular/core';
import { ProductService } from '@my-product-app/frontend-data-access';
import { ProductListModel as Product } from './product.model';
import { catchError, of, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductListStore {
  // Writable signals
  private _products = signal<Product[]>([]);
  private _isLoading = signal(false);
  private _error = signal<string | null>(null);
  private _deferReady = signal(false);

  // Computed (read-only) signals
  readonly products = computed(() => this._products());
  readonly isLoading = computed(() => this._isLoading());
  readonly errorMessage = computed(() => this._error());
  readonly isDeferReady = computed(() => this._deferReady());

  private _hasLoadedOnce = false;

  constructor(private productService: ProductService) {}

  /** Load products from the backend */
  loadProducts(forceReload = false) {
    if (this._hasLoadedOnce && !forceReload) return;

    this._isLoading.set(true);
    this._error.set(null);
    this._deferReady.set(false);

    this.productService
      .findAllProducts()
      .pipe(
        tap((products: Product[]) => {
          this._products.set(products);
          this._hasLoadedOnce = true;

          // Defer-ready flag to simulate @defer
          setTimeout(() => this._deferReady.set(true), 200);
        }),
        catchError((err) => {
          console.error('Failed to load products:', err);
          this._error.set('Failed to load products');
          return of([]);
        })
      )
      .subscribe({
        next: () => this._isLoading.set(false),
        error: () => this._isLoading.set(false),
      });
  }

  /** Add a new product at the top */
  addProduct(product: Product) {
    this._products.update((prev) => [product, ...prev]);
  }

  /** Refresh products manually */
  refreshProducts() {
    this._hasLoadedOnce = false;
    this.loadProducts(true);
  }

  /** Optional: remove a product by ID */
  removeProduct(productId: number) {
    this._products.update((prev) => prev.filter((p) => p.id !== productId));
  }
}
