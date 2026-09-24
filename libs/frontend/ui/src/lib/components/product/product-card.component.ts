import {
  Component,
  computed,
  inject,
  input,
  output,
} from '@angular/core';


import {
  LoginStore,
  MaterialModule,
  ProductListModel as Product,
} from '@my-product-app/frontend-shared';

import {
  RuntimeConfigStore,
} from '@my-product-app/frontend-core';

@Component({
  selector: 'lib-product-card',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  readonly loginStore = inject(LoginStore);
  private readonly runtimeConfigStore =
    inject(RuntimeConfigStore);

  readonly product = input.required<Product>();

  readonly productImageUrl = computed(() => {
    const image = this.product().image;

    if (!image) {
      return null;
    }

    const baseUrl =
      this.runtimeConfigStore.apigateUrl();

    const path = image.startsWith('/')
      ? image
      : `/${image}`;

    return `${baseUrl}${path}`;
  });

  readonly edit = output<Product>();
  readonly delete = output<number>();
  readonly workOrder = output<Product>();

  triggerEdit(): void {
    this.edit.emit(this.product());
  }

  triggerDelete(): void {
    this.delete.emit(this.product().id);
  }

  triggerWorkOrder(): void {
    this.workOrder.emit(this.product());
  }
}