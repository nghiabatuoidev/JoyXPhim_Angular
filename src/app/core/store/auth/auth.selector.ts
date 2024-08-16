import { createSelector, createFeatureSelector } from '@ngrx/store';
import { IAuthState } from './auth.state';

export const selectAuthState = createFeatureSelector<IAuthState>('auth');

export const selectCurrentUser = createSelector(
  selectAuthState,
  (state: IAuthState) => state?.user ? state.user : state.error
);
