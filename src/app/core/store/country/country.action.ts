import { createAction, props } from '@ngrx/store';

export const GetAllCountryStart = createAction(
  '[Countries] Get Countries Start',
);
export const GetAllCountrySuccess = createAction(
  '[Countries] Get Countries Success',
  props<{ country: any }>()
);
export const GetAllCountryFailure = createAction(
  '[Countries] Get Countries Failure',
  props<{ error: any }>()
);
