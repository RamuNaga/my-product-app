import { Routes } from '@angular/router';
import { authGuard } from '@my-product-app/frontend-shared';
import { ShellComponent } from '@my-product-app/frontend-ui';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () =>
      import(
        '@my-product-app/frontend-ui/components/auth/auth-form.component'
      ).then((m) => m.AuthFormComponent),
  },
  {
    path: 'home',
    component: ShellComponent,
    canActivate: [authGuard],
    children: [
      {
        path: '',
        loadComponent: () =>
          import(
            '@my-product-app/frontend-ui/components/dashboard/dashboard.component'
          ).then((m) => m.DashboardComponent),
      },
      // Add more children here like /products, /work-orders, etc.
    ],
  },
];
