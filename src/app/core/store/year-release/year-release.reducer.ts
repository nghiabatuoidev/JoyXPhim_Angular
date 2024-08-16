import { createReducer, on } from '@ngrx/store';
import * as YearRealeaseActions from './year-release.action';
import { initialYearReleaseState } from './year-release.state';

//movie reducer
export const yearRealeasesReducer = createReducer(
    initialYearReleaseState,
  on(YearRealeaseActions.GetAllYearReleaseStart, (state) => ({
    ...state,
    isFetching: true,
    isSuccess: false,
    isError: false,
    yearRelease: null,
    error: null,
  })),
  on(YearRealeaseActions.GetAllYearReleaseSuccess, (state, {yearRelease}) => ({
    ...state,
    isFetching: false,
    isSuccess: true,
    isError: false,
    yearRelease,
    error: null,
  })),
  on(YearRealeaseActions.GetAllYearReleaseFailure, (state, {error}) => ({
    ...state,
    isFetching: false,
    isSuccess: false,
    isError: true,
    yearRelease: null,
    error
  }))
);