import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ILangState } from './lang.state';

export const selectLangsState = createFeatureSelector<ILangState>('langs');
export const selectLangs = createSelector(
    selectLangsState,
  (state: ILangState) => state.lang
);