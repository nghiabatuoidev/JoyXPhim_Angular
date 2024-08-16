import { createReducer, on } from '@ngrx/store';
import * as CountriesAction from './country.action';
import { initialCountriesState } from './country.state';

//
export const countriesReducer = createReducer(
    initialCountriesState,
  on(CountriesAction.GetAllCountryStart, (state) => ({
    ...state,
    isFetching: true,
    isSuccess: false,
    isError: false,
    country: null,
    error: null,
  })),
  on(CountriesAction.GetAllCountrySuccess, (state, {country}) => ({
    ...state,
    isFetching: false,
    isSuccess: true,
    isError: false,
    country,
    error: null,
  })),
  on(CountriesAction.GetAllCountryFailure, (state, {error}) => ({
    ...state,
    isFetching: false,
    isSuccess: false,
    isError: true,
    country: null,
    error
  }))
);