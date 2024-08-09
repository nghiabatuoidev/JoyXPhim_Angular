import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.action';
import { initialState } from './auth.state';

export const authReducer = createReducer(
  initialState,
  on(AuthActions.login, (state) => ({
    ...state,
    isFetching: true,
    isError: false,
    isSuccess: false,
    user: null,
    error: null,
  })),
  on(AuthActions.loginSuccess, (state, { user }) => ({
    ...state,
    isSuccess: true,
    isFetching: false,
    isError: false,
    user,
    error: null,
  })),
  on(AuthActions.loginFailure, (state, { error }) => ({
    ...state,
    isError: true,
    isSuccess: true,
    isFetching: false,
    user: null,
    error,
  }))
);
