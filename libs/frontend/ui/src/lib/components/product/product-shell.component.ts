import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import {
  MaterialModule,
  ProductListStore,
} from '@my-product-app/frontend-shared';

@Component({
  selector: 'lib-product-shell',
  standalone: true,
  imports: [CommonModule, MaterialModule, RouterModule],
  templateUrl: './product-shell.component.html',
  styleUrls: ['./product-shell.component.scss'],
})
export class ProductShellComponent implements OnInit {
  readonly tabs = [
    { label: 'Product List', path: 'list' },
    { label: 'Create Product', path: 'form' },
  ];

  selectedIndex = signal(0);
  store = inject(ProductListStore);

  constructor(private router: Router, private route: ActivatedRoute) {}

  onTabChange(index: number): void {
    this.selectedIndex.set(index);
    const selectedTab = this.tabs[index];
    this.router.navigate([selectedTab.path], { relativeTo: this.route });
    // If switching to list tab, refresh product list store
    if (selectedTab.path === 'list') {
      //console.log(selectedTab.path + 'calling');
      this.store.refreshProducts(); // inject ProductListStore in this component!
    }
  }

  // Update selected tab based on route changes (optional but recommended)
  ngOnInit(): void {
    this.route.firstChild?.url.subscribe((urlSegment) => {
      const path = urlSegment[0]?.path;
      const tabIndex = this.tabs.findIndex((tab) => tab.path === path);
      if (tabIndex !== -1) {
        this.selectedIndex.set(tabIndex);
      }
    });
  }
}
