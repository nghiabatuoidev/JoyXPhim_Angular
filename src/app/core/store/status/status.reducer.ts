import { createReducer, on } from '@ngrx/store';
import * as StatusActions from './status.action';
import { initialStatusesState } from './status.state';

//movie reducer
export const statusesReducer = createReducer(
    initialStatusesState,
  on(StatusActions.GetAllStatusesStart, (state) => ({
    ...state,
    isFetching: true,
    isSuccess: false,
    isError: false,
    status: null,
    error: null,
  })),
  on(StatusActions.GetAllStatusesSuccess, (state, {status}) => ({
    ...state,
    isFetching: false,
    isSuccess: true,
    isError: false,
    status,
    error: null,
  })),
  on(StatusActions.GetAllStatusesFailure, (state, {error}) => ({
    ...state,
    isFetching: false,
    isSuccess: false,
    isError: true,
    status: null,
    error
  }))
);