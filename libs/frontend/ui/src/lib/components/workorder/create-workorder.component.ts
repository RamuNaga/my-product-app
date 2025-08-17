import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MaterialModule, ProductStore } from '@my-product-app/frontend-shared';
import { CreateWorkOrderFormComponent } from './create-workorder-form.component';

@Component({
  selector: 'lib-create-workorder',
  templateUrl: './create-workorder.component.html',
  styleUrls: ['./create-workorder.component.scss'],
  standalone: true,
  imports: [CommonModule, MaterialModule, CreateWorkOrderFormComponent],
})
export class CreateWorkOrderComponent {
  readonly route = inject(ActivatedRoute);
  productStore = inject(ProductStore);

  // Reactive signal for product details
  product = this.productStore.product;
}
