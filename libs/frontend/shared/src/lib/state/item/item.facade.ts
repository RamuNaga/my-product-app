import { inject, Injectable } from '@angular/core';
import { ItemStore } from './item.store';

import {
  CreateItemInput,
  CreateItemsInput,
  UpdateItemInput,
} from '@my-product-app/frontend-graphql-types';

@Injectable()
export class ItemFacade {
  private readonly store = inject(ItemStore);

  // Read-only state exposed to components
  readonly items = this.store.items;
  readonly filteredItems = this.store.filteredItems;
  readonly selectedItem = this.store.selectedItem;

  readonly loading = this.store.loading;
  readonly saving = this.store.saving;
  readonly error = this.store.error;

  readonly searchTerm = this.store.searchTerm;
  readonly statusFilter = this.store.statusFilter;

  readonly activeCount = this.store.activeCount;
  readonly inactiveCount = this.store.inactiveCount;

  // Filters
  setSearchTerm(value: string): void {
    this.store.setSearchTerm(value);
  }

  setStatusFilter(value: 'all' | 'active' | 'inactive'): void {
    this.store.setStatusFilter(value);
  }

  clearError(): void {
    this.store.clearError();
  }

  // Queries
  loadItems(): Promise<void> {
    return this.store.loadItems();
  }

  loadItemById(id: number): Promise<void> {
    return this.store.loadItemById(id);
  }

  // Mutations
  createItem(input: CreateItemInput): Promise<void> {
    return this.store.createItem(input);
  }

  createItems(input: CreateItemsInput): Promise<void> {
    return this.store.createItems(input);
  }

  updateItem(input: UpdateItemInput): Promise<void> {
    return this.store.updateItem(input);
  }

  deactivateItem(id: number): Promise<void> {
    return this.store.deactivateItem(id);
  }

  reactivateItem(id: number): Promise<void> {
    return this.store.reactivateItem(id);
  }
}
