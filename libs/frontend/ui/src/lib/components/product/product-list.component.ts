import { CommonModule } from '@angular/common';
import { Component, effect, inject } from '@angular/core';
import {
  MaterialModule,
  ProductListStore,
} from '@my-product-app/frontend-shared';

@Component({
  selector: 'lib-product-list',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  store = inject(ProductListStore);

  products = this.store.products;
  isLoading = this.store.isLoading;
  errorMessage = this.store.errorMessage;
  isDeferReady = this.store.isDeferReady;

  constructor() {
    effect(() => {
      this.store.loadProducts();
    });
  }
}
