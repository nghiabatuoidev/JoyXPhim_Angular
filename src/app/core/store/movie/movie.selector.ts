import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IMovieState } from './movie.state';

export const selectMovieState = createFeatureSelector<IMovieState>('movie');
export const selectMovie = createSelector(
  selectMovieState,
  (state: IMovieState) => state.movie
);
//
export const selectMoviesState = createFeatureSelector<IMovieState>('movies');
export const selectAllMovies = createSelector(
  selectMoviesState,
  (state: IMovieState) => state.movie
);