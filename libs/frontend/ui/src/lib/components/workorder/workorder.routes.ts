import { Routes } from '@angular/router';
import { WorkorderShellComponent } from './workorder-shell.component';
import { WORKORDER_ROUTES } from './workorder.routes.const';
import { WorkOrderListComponent } from './workorder-list.component';
import { CreateWorkOrderFormComponent } from './create-workorder-form.component';

export const workOrderRoutes: Routes = [
  {
    path: '',
    component: WorkorderShellComponent, // this will hold the tabs
    children: [
      { path: WORKORDER_ROUTES.LIST, component: WorkOrderListComponent },
      { path: WORKORDER_ROUTES.FORM, component: CreateWorkOrderFormComponent },
      { path: '', redirectTo: WORKORDER_ROUTES.LIST, pathMatch: 'full' },
    ],
  },
];
