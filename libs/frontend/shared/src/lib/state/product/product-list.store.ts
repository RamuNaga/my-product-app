import { Injectable, signal, computed, inject } from '@angular/core';
import { ProductService } from '@my-product-app/frontend-data-access';
import { ProductListModel as Product } from './product.model';
import { catchError, of, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductListStore {
  readonly productService = inject(ProductService);
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

  /** Load products from the backend, merge with existing ones */
  loadProducts(forceReload = false) {
    if (this._hasLoadedOnce && !forceReload) return;

    this._isLoading.set(true);
    this._error.set(null);

    this.productService
      .findAllProducts()
      .pipe(
        tap((products: Product[]) => {
          // Merge backend products with locally added products
          const existingIds = new Set(this._products().map((p) => p.id));
          const merged = [
            ...products,
            ...this._products().filter((p) => !existingIds.has(p.id)),
          ];
          this._products.set(merged);

          // Mark as loaded
          this._hasLoadedOnce = true;

          // Only set deferReady on first load
          if (!this._deferReady()) {
            setTimeout(() => this._deferReady.set(true), 200);
          }
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
    this.loadProducts(true);
  }

  /** Optional: remove a product by ID */
  removeProduct(productId: number) {
    this._products.update((prev) => prev.filter((p) => p.id !== productId));
  }
}
