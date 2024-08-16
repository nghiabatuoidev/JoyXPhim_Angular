import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IYearReleaseState } from './year-release.state';

export const selectYearRelasesState = createFeatureSelector<IYearReleaseState>('yearReleases');
export const selectYearRelaseses = createSelector(
    selectYearRelasesState,
  (state: IYearReleaseState) => state.yearRelease
);