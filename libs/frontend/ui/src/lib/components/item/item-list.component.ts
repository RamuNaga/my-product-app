import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { ItemFacade, MaterialModule } from '@my-product-app/frontend-shared';

@Component({
  selector: 'lib-item-list',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemListComponent implements OnInit {
  readonly facade = inject<ItemFacade>(ItemFacade);
  private readonly router = inject(Router);

  readonly displayedColumns = [
    'code',
    'name',
    'kind',
    'supplyType',
    'baseUnit',
    'status',
    'actions',
  ];

  ngOnInit(): void {
    void this.facade.loadItems();
  }

  onSearch(value: string): void {
    this.facade.setSearchTerm(value);
  }

  onStatusChange(value: string): void {
    if (value === 'all' || value === 'active' || value === 'inactive') {
      this.facade.setStatusFilter(value);
    }
  }

  onCreate(): void {
    void this.router.navigate(['/home/items/form']);
  }

  onBulkCreate(): void {
    void this.router.navigate(['/home/items/bulk-create']);
  }

  onEdit(id: number): void {
    void this.router.navigate(['/home/items/edit', id]);
  }

  async onToggleStatus(id: number, isActive: boolean): Promise<void> {
    try {
      if (isActive) {
        await this.facade.deactivateItem(id);
      } else {
        await this.facade.reactivateItem(id);
      }
    } catch {
      // The store exposes the error through facade.error().
    }
  }
}
