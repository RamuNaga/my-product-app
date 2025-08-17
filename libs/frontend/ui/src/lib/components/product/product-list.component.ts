import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import {
  MaterialModule,
  ProductListStore,
  ProductStore,
} from '@my-product-app/frontend-shared';
import { ProductCardComponent } from './product-card.component';
import { ProductListModel as Product } from '@my-product-app/frontend-shared';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-product-list',
  standalone: true,
  imports: [CommonModule, MaterialModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent implements OnInit {
  store = inject(ProductListStore);
  productStore = inject(ProductStore);
  router = inject(Router);

  products = this.store.products;
  isLoading = this.store.isLoading;
  errorMessage = this.store.errorMessage;
  isDeferReady = this.store.isDeferReady;

  ngOnInit(): void {
    this.store.loadProducts();
  }

  onEdit(product: Product) {
    // handle edit
    console.log(product);
  }

  onDelete(id: number) {
    // handle delete
    console.log(id);
  }

  onWorkOrder(product: Product) {
    this.productStore.setProduct(product);
    this.router.navigate(['/home/workOrders/form']);
  }
}
