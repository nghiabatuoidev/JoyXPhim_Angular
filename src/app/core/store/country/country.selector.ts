import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ICountryState } from './country.state';

export const selectCountriesState = createFeatureSelector<ICountryState>('countries');
export const selectCountries = createSelector(
    selectCountriesState,
  (state: ICountryState) => state.country
);