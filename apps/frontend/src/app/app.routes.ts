import { Routes } from '@angular/router';
import { APP_ROUTES, authGuard } from '@my-product-app/frontend-shared';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: APP_ROUTES.LOGIN,
    pathMatch: 'full',
  },
  {
    path: APP_ROUTES.LOGIN,
    loadComponent: () =>
      import(
        '@my-product-app/frontend-ui/components/auth/auth-form.component'
      ).then((m) => m.AuthFormComponent),
  },
  {
    path: APP_ROUTES.HOME,
    loadComponent: () =>
      import(
        '@my-product-app/frontend-ui/components/layout/shell.component'
      ).then((m) => m.ShellComponent),
    canActivate: [authGuard],
    children: [
      {
        path: '',
        redirectTo: APP_ROUTES.DASHBOARD,
        pathMatch: 'full',
      },
      {
        path: APP_ROUTES.DASHBOARD,
        loadComponent: () =>
          import(
            '@my-product-app/frontend-ui/components/dashboard/dashboard.component'
          ).then((m) => m.DashboardComponent),
      },
      {
        path: APP_ROUTES.PRODUCTS,
        loadChildren: () =>
          import(
            '@my-product-app/frontend-ui/components/product/product.routes'
          ).then((m) => m.productRoutes),
      },
      {
        path: APP_ROUTES.WORK_ORDERS,
        loadChildren: () =>
          import(
            '@my-product-app/frontend-ui/components/workorder/workorder.routes'
          ).then((m) => m.workOrderRoutes),
      },
      // Lazy-load other routes here...
    ],
  },
];
