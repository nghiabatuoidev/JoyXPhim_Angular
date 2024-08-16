import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IStatusState } from './status.state';

export const selectStatusState = createFeatureSelector<IStatusState>('statuses');
export const selectStatuses = createSelector(
    selectStatusState,
  (state: IStatusState) => state.status
);