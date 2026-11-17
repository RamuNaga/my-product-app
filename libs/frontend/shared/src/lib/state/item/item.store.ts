import { computed, inject } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { ItemService } from '@my-product-app/frontend-data-access';
import {
  GetItemsQuery,
  GetItemByIdQuery,
  CreateItemInput,
  CreateItemsInput,
  UpdateItemInput,
} from '@my-product-app/frontend-graphql-types';
import { firstValueFrom } from 'rxjs';

type Item = GetItemsQuery['items'][number];
type ItemDetail = GetItemByIdQuery['item'];
type StatusFilter = 'all' | 'active' | 'inactive';

interface ItemState {
  items: Item[];
  selectedItem: ItemDetail | null;
  loading: boolean;
  saving: boolean;
  error: string | null;
  searchTerm: string;
  statusFilter: StatusFilter;
}

const initialState: ItemState = {
  items: [],
  selectedItem: null,
  loading: false,
  saving: false,
  error: null,
  searchTerm: '',
  statusFilter: 'all',
};

export const ItemStore = signalStore(
  withState(initialState),

  withComputed(({ items, searchTerm, statusFilter }) => ({
    filteredItems: computed(() => {
      const search = searchTerm().trim().toLowerCase();

      return items().filter((item) => {
        const matchesSearch =
          !search ||
          item.name.toLowerCase().includes(search) ||
          item.code.toLowerCase().includes(search);

        const matchesStatus =
          statusFilter() === 'all' ||
          (statusFilter() === 'active' && item.isActive) ||
          (statusFilter() === 'inactive' && !item.isActive);

        return matchesSearch && matchesStatus;
      });
    }),

    activeCount: computed(() => items().filter((item) => item.isActive).length),

    inactiveCount: computed(
      () => items().filter((item) => !item.isActive).length,
    ),
  })),

  withMethods((store, itemService = inject(ItemService)) => ({
    setSearchTerm(searchTerm: string): void {
      patchState(store, { searchTerm });
    },

    setStatusFilter(statusFilter: StatusFilter): void {
      patchState(store, { statusFilter });
    },

    clearError(): void {
      patchState(store, { error: null });
    },

    async loadItems(): Promise<void> {
      patchState(store, { loading: true, error: null });

      try {
        const items = await firstValueFrom(itemService.getItems());
        patchState(store, { items });
      } catch (error) {
        patchState(store, {
          error:
            error instanceof Error ? error.message : 'Failed to load items',
        });
      } finally {
        patchState(store, { loading: false });
      }
    },

    async loadItemById(id: number): Promise<void> {
      patchState(store, { loading: true, error: null, selectedItem: null });

      try {
        const selectedItem = await firstValueFrom(itemService.getItemById(id));

        patchState(store, { selectedItem });
      } catch (error) {
        patchState(store, {
          error: error instanceof Error ? error.message : 'Failed to load item',
        });
      } finally {
        patchState(store, { loading: false });
      }
    },

    async createItem(input: CreateItemInput): Promise<void> {
      patchState(store, { saving: true, error: null });

      try {
        await firstValueFrom(itemService.createItem(input));
        await this.loadItems();
      } catch (error) {
        patchState(store, {
          error:
            error instanceof Error ? error.message : 'Failed to create item',
        });
        throw error;
      } finally {
        patchState(store, { saving: false });
      }
    },

    async createItems(input: CreateItemsInput): Promise<void> {
      patchState(store, { saving: true, error: null });

      try {
        await firstValueFrom(itemService.createItems(input));
        await this.loadItems();
      } catch (error) {
        patchState(store, {
          error:
            error instanceof Error ? error.message : 'Failed to create items',
        });
        throw error;
      } finally {
        patchState(store, { saving: false });
      }
    },

    async updateItem(input: UpdateItemInput): Promise<void> {
      patchState(store, { saving: true, error: null });

      try {
        await firstValueFrom(itemService.updateItem(input));
        await this.loadItems();
      } catch (error) {
        patchState(store, {
          error:
            error instanceof Error ? error.message : 'Failed to update item',
        });
        throw error;
      } finally {
        patchState(store, { saving: false });
      }
    },

    async deactivateItem(id: number): Promise<void> {
      patchState(store, { saving: true, error: null });

      try {
        await firstValueFrom(itemService.deactivateItem(id));
        await this.loadItems();
      } catch (error) {
        patchState(store, {
          error:
            error instanceof Error
              ? error.message
              : 'Failed to deactivate item',
        });
        throw error;
      } finally {
        patchState(store, { saving: false });
      }
    },

    async reactivateItem(id: number): Promise<void> {
      patchState(store, { saving: true, error: null });

      try {
        await firstValueFrom(itemService.reactivateItem(id));
        await this.loadItems();
      } catch (error) {
        patchState(store, {
          error:
            error instanceof Error
              ? error.message
              : 'Failed to reactivate item',
        });
        throw error;
      } finally {
        patchState(store, { saving: false });
      }
    },
  })),
);
