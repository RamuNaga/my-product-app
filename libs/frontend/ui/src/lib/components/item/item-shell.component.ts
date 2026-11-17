import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MaterialModule } from '@my-product-app/frontend-shared';

@Component({
  selector: 'lib-item-shell',
  standalone: true,
  imports: [MaterialModule, RouterModule],
  templateUrl: './item-shell.component.html',
  styleUrls: ['./item-shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemShellComponent {
  private readonly router = inject(Router);

  readonly tabs = [
    { label: 'Item List', path: 'list' },
    { label: 'Create Item', path: 'form' },
  ];

  readonly selectedIndex = () =>
    this.router.url.split('/').includes('form') ? 1 : 0;

  onTabChange(index: number): void {
    const tab = this.tabs[index];

    if (tab) {
      this.router.navigate(['/home/items', tab.path]);
    }
  }
}
