import { Routes } from '@angular/router';
import { ItemStore, ItemFacade } from '@my-product-app/frontend-shared';

import { ItemShellComponent } from './item-shell.component';
import { ITEM_ROUTES } from './item.routes.const';

export const itemRoutes: Routes = [
  {
    path: '',
    component: ItemShellComponent,
    providers: [ItemStore, ItemFacade],
    children: [
      {
        path: ITEM_ROUTES.LIST,
        loadComponent: () =>
          import('./item-list.component').then((m) => m.ItemListComponent),
      },
      {
        path: ITEM_ROUTES.FORM,
        loadComponent: () =>
          import('./item-form.component').then((m) => m.ItemFormComponent),
      },
      {
        path: ITEM_ROUTES.EDIT,
        loadComponent: () =>
          import('./item-form.component').then((m) => m.ItemFormComponent),
      },
      {
        path: '',
        redirectTo: ITEM_ROUTES.LIST,
        pathMatch: 'full',
      },
    ],
  },
];
