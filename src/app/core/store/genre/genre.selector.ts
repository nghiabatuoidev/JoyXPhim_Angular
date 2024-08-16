import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IGenreState } from './genre.state';

export const selectGenresState = createFeatureSelector<IGenreState>('genres');
export const selectGenres = createSelector(
    selectGenresState,
  (state: IGenreState) => state.genre
);