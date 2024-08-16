import { createAction, props } from '@ngrx/store';

export const GetAllYearReleaseStart = createAction(
  '[YearReleases] Get YearReleases Start',
);
export const GetAllYearReleaseSuccess = createAction(
  '[YearReleases] Get YearReleases Success',
  props<{ yearRelease: any }>()
);
export const GetAllYearReleaseFailure = createAction(
  '[YearReleases] Get YearReleases Failure',
  props<{ error: any }>()
);
