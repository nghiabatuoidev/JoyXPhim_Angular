import { createAction, props } from '@ngrx/store';

export const GetAllLangStart = createAction(
  '[Langs] Get Langs Start',
);
export const GetAllLangSuccess = createAction(
  '[Langs] Get Langs Success',
  props<{ lang: any }>()
);
export const GetAllLangFailure = createAction(
  '[Langs] Get Langs Failure',
  props<{ error: any }>()
);
