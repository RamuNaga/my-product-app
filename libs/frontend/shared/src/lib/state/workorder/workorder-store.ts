import { WritableSignal } from '@angular/core';
import { signalStore, withState, withMethods } from '@ngrx/signals';
import { Workorder } from './workorder.model';

// ------------------ WorkorderStore ------------------
export interface WorkorderState {
  workorders: Workorder[];
  selected?: Workorder | null;
  loading: boolean;
  error: string | null;
}

export const workorderStore = signalStore(
  withState<WorkorderState>({
    workorders: [],
    selected: null,
    loading: false,
    error: null,
  }),
  withMethods((self) => ({
    setWorkorders(workorders: Workorder[]) {
      (self.workorders as WritableSignal<Workorder[]>).set(workorders);
    },
    setSelected(workorder: Workorder | null) {
      (self.selected as WritableSignal<Workorder | null>).set(workorder);
    },
    setLoading(loading: boolean) {
      (self.loading as WritableSignal<boolean>).set(loading);
    },
    setError(error: string | null) {
      (self.error as WritableSignal<string | null>).set(error);
    },
    addWorkorder(workorder: Workorder) {
      (self.workorders as WritableSignal<Workorder[]>).set([
        ...self.workorders(),
        workorder,
      ]);
    },
    updateWorkorder(workorder: Workorder) {
      (self.workorders as WritableSignal<Workorder[]>).set(
        self.workorders().map((w) => (w.id === workorder.id ? workorder : w))
      );
    },
    deleteWorkorder(id: number) {
      (self.workorders as WritableSignal<Workorder[]>).set(
        self.workorders().filter((w) => w.id !== id)
      );
    },
  }))
);

// ------------------ WorkorderListStore ------------------
export interface WorkorderListState {
  workorders: Workorder[];
  loading: boolean;
  error: string | null;
  page: number;
  pageSize: number;
  total: number;
  filter: string;
}

export const workorderListStore = signalStore(
  withState<WorkorderListState>({
    workorders: [],
    loading: false,
    error: null,
    page: 1,
    pageSize: 10,
    total: 0,
    filter: '',
  }),
  withMethods((self) => ({
    setWorkorders(workorders: Workorder[], total: number) {
      (self.workorders as WritableSignal<Workorder[]>).set(workorders);
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
    setFilter(filter: string) {
      (self.filter as WritableSignal<string>).set(filter);
    },
    addWorkorder(workorder: Workorder) {
      (self.workorders as WritableSignal<Workorder[]>).set([
        ...self.workorders(),
        workorder,
      ]);
    },
    updateWorkorder(workorder: Workorder) {
      (self.workorders as WritableSignal<Workorder[]>).set(
        self.workorders().map((w) => (w.id === workorder.id ? workorder : w))
      );
    },
    deleteWorkorder(id: number) {
      (self.workorders as WritableSignal<Workorder[]>).set(
        self.workorders().filter((w) => w.id !== id)
      );
    },
  }))
);
