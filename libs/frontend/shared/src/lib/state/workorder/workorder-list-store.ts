import {
  InjectionToken,
  makeEnvironmentProviders,
  inject,
  Signal,
  WritableSignal,
  signal,
} from '@angular/core';
import { signalStore, withMethods, withState } from '@ngrx/signals';
import { firstValueFrom } from 'rxjs';

import { WorkorderService } from '@my-product-app/frontend-data-access';
import { WorkorderListModel, WorkorderListResponse } from './workorder.model';

// ------------------ Workorder List Store ------------------
export interface WorkorderListState {
  workorders: WorkorderListModel[];
  loading: boolean;
  error: string | null;
  page: number;
  pageSize: number;
  total: number;
}

export interface WorkorderListStoreType {
  workorders: Signal<WorkorderListModel[]>;
  loading: Signal<boolean>;
  error: Signal<string | null>;
  page: Signal<number>;
  pageSize: Signal<number>;
  total: Signal<number>;

  setWorkorders(workorders: WorkorderListModel[], total: number): void;
  setLoading(loading: boolean): void;
  setError(error: string | null): void;
  setPage(page: number): void;
  setPageSize(size: number): void;

  setFilter(
    key: 'workOrderCode' | 'clientLocation' | 'status',
    value: string
  ): void;
  getFilters(): Record<
    'workOrderCode' | 'clientLocation' | 'status',
    Signal<string>
  >;

  fetchWorkorders(): Promise<void>;
}

export const workorderListStoreFactory = (): WorkorderListStoreType => {
  const StoreClass = signalStore(
    withState<WorkorderListState>({
      workorders: [],
      loading: false,
      error: null,
      page: 1,
      pageSize: 10,
      total: 0,
    }),
    withMethods((self) => {
      const workorderService = inject(WorkorderService);

      const filters: Record<
        'workOrderCode' | 'clientLocation' | 'status',
        WritableSignal<string>
      > = {
        workOrderCode: signal(''),
        clientLocation: signal(''),
        status: signal(''),
      };

      return {
        setWorkorders(workorders: WorkorderListModel[], total: number) {
          (self.workorders as WritableSignal<WorkorderListModel[]>).set(
            workorders
          );
          (self.total as WritableSignal<number>).set(total);
        },

        setLoading(loading: boolean) {
          (self.loading as WritableSignal<boolean>).set(loading);
        },

        setError(error: string | null) {
          (self.error as WritableSignal<string | null>).set(error);
        },

        setPage(page: number) {
          (self.page as WritableSignal<number>).set(page);
        },

        setPageSize(size: number) {
          (self.pageSize as WritableSignal<number>).set(size);
        },

        setFilter(key: keyof typeof filters, value: string) {
          filters[key].set(value);
        },

        getFilters() {
          return filters;
        },

        async fetchWorkorders() {
          this.setLoading(true);
          this.setError(null);

          try {
            const variables: any = {
              page: self.page(),
              pageSize: self.pageSize(),
            };

            console.log('Applied filters:', {
              workOrderCode: filters.workOrderCode(),
              clientLocation: filters.clientLocation(),
              status: filters.status(),
            });

            if (filters.workOrderCode())
              variables.workOrderCode = filters.workOrderCode();
            if (filters.clientLocation())
              variables.clientLocation = filters.clientLocation();
            if (filters.status()) variables.status = filters.status();

            // Service returns Observable<WorkorderListResponse>
            const response: WorkorderListResponse = await firstValueFrom(
              workorderService.getWorkOrders(variables)
            );

            const workorders: WorkorderListModel[] = response?.workorders ?? [];
            const total: number = response?.total ?? 0;

            this.setWorkorders(workorders, total);
          } catch (err: any) {
            this.setError(err?.message ?? 'Failed to fetch workorders');
          } finally {
            this.setLoading(false);
          }
        },
      };
    })
  );

  return new StoreClass();
};

// DI Token and Provider
export const WORKORDER_LIST_STORE = new InjectionToken<WorkorderListStoreType>(
  'WORKORDER_LIST_STORE'
);

export const workorderListStoreProvider = makeEnvironmentProviders([
  { provide: WORKORDER_LIST_STORE, useFactory: workorderListStoreFactory },
]);
