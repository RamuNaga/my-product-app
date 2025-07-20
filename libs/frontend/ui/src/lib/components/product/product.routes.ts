import { Routes } from '@angular/router';

import { ProductFormComponent } from './product-form.component';
import { ProductListComponent } from './product-list.component';
import { PRODUCT_ROUTES } from './product.routes.const';
import { ProductShellComponent } from './product-shell.component';

export const productRoutes: Routes = [
  {
    path: '',
    component: ProductShellComponent, // this will hold the tabs
    children: [
      { path: PRODUCT_ROUTES.LIST, component: ProductListComponent },
      { path: PRODUCT_ROUTES.FORM, component: ProductFormComponent },
      { path: '', redirectTo: PRODUCT_ROUTES.LIST, pathMatch: 'full' },
    ],
  },
];
