import { createAction, props } from '@ngrx/store';

export const GetAllGenreStart = createAction(
  '[Genres] Get Genres Start',
);
export const GetAllGenreSuccess = createAction(
  '[Genres] Get Genres Success',
  props<{ genre: any }>()
);
export const GetAllGenreFailure = createAction(
  '[Genres] Get Genres Failure',
  props<{ error: any }>()
);
