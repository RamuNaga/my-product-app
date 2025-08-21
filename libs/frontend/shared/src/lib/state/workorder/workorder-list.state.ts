import { Workorder } from './workorder.model';

export interface WorkorderListState {
  workorders: Workorder[];
  loading: boolean;
  error?: string;
}

export const initialWorkorderListState: WorkorderListState = {
  workorders: [],
  loading: false,
  error: undefined,
};
