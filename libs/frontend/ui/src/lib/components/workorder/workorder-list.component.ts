import { Component, signal } from '@angular/core';
import { AsyncPipe, NgIf, NgFor } from '@angular/common';
import { MaterialModule } from '@my-product-app/frontend-shared';
import { MaterialLoaderComponent } from '../loader/loader.component';
// import { WorkorderService } from '@my-product-app/frontend/data-access'; // Adjust if your service path differs
// import { Workorder } from '@my-product-app/shared-types'; // Assuming you have a shared Workorder model

@Component({
  selector: 'lib-workorder-list',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    AsyncPipe,
    MaterialModule,
    MaterialModule,
    MaterialLoaderComponent,
  ],
  templateUrl: './workorder-list.component.html',
  styleUrls: ['./workorder-list.component.scss'],
})
export class WorkOrderListComponent {
  //   private readonly workorderService = inject(WorkorderService);

  //workorders = signal<Workorder[]>([]);
  isLoading = signal(false);

  constructor() {
    this.fetchWorkorders();
  }

  fetchWorkorders() {
    this.isLoading.set(false);
    // this.workorderService.findAll().subscribe({
    //   next: (data) => {
    //     this.workorders.set(data);
    //     this.isLoading.set(false);
    //   },
    //   error: () => {
    //     this.isLoading.set(false);
    //     // Handle errors appropriately
    //   },
    // });
  }
}
