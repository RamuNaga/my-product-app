import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { MaterialModule } from '@my-product-app/frontend-shared';

@Component({
  selector: 'lib-workorder-shell',
  imports: [CommonModule, MaterialModule, RouterModule],
  templateUrl: './workorder-shell.component.html',
  styleUrls: ['./workorder-shell.component.scss'],
})
export class WorkorderShellComponent {
  tabs = [
    { label: 'Work Order List', path: 'list' },
    { label: 'Create Work Order', path: 'form' },
  ];

  router = inject(Router);
  route = inject(ActivatedRoute);

  selectedIndex(): number {
    const current = this.route.snapshot.firstChild?.routeConfig?.path;
    return this.tabs.findIndex((tab) => tab.path === current);
  }

  onTabChange(index: number): void {
    this.router.navigate([this.tabs[index].path], { relativeTo: this.route });
  }
}
