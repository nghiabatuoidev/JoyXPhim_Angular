import { createAction, props } from '@ngrx/store';

export const GetAllStatusesStart = createAction(
  '[Statuses] Get Statuses Start',
);
export const GetAllStatusesSuccess = createAction(
  '[Statuses] Get Statuses Success',
  props<{ status: any }>()
);
export const GetAllStatusesFailure = createAction(
  '[Statuses] Get Statuses Failure',
  props<{ error: any }>()
);
