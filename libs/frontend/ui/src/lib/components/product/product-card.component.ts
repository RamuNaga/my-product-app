import { Component, Input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@my-product-app/frontend-shared';
import { ProductListModel as Product } from '@my-product-app/frontend-shared';

@Component({
  selector: 'lib-product-card',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() product!: Product;

  // Signals instead of EventEmitters
  // Use the new signal-based output
  readonly edit = output<Product>();
  readonly delete = output<number>(); // maybe ID
  readonly workOrder = output<Product>();

  triggerEdit() {
    this.edit.emit(this.product);
  }

  triggerDelete() {
    this.delete.emit(this.product.id);
  }

  triggerWorkOrder() {
    this.workOrder.emit(this.product);
  }
}
