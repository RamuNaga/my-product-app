import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { MaterialModule } from '@my-product-app/frontend-shared';

@Component({
  selector: 'lib-product-shell',
  standalone: true,
  imports: [CommonModule, MaterialModule, RouterModule],
  templateUrl: './product-shell.component.html',
  styleUrls: ['./product-shell.component.scss'],
})
export class ProductShellComponent {
  readonly tabs = [
    { label: 'Product List', path: 'list' },
    { label: 'Create Product', path: 'create' },
  ];

  selectedIndex = signal(0);

  constructor(private router: Router, private route: ActivatedRoute) {}

  onTabChange(index: number): void {
    this.selectedIndex.set(index);
    const selectedTab = this.tabs[index];
    this.router.navigate([selectedTab.path], { relativeTo: this.route });
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
