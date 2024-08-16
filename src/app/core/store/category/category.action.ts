import { createAction, props } from '@ngrx/store';

export const GetAllCategoryStart = createAction(
  '[Categories] Get Categories Start',
);
export const GetAllCategorySuccess = createAction(
  '[Categories] Get Categories Success',
  props<{ category: any }>()
);
export const GetAllCategoryFailure = createAction(
  '[Categories] Get Categories Failure',
  props<{ error: any }>()
);
