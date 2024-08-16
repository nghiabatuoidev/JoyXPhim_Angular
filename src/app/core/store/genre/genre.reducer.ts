import { createReducer, on } from '@ngrx/store';
import * as GenreActions from './genre.action';
import { initialGenreState } from './genre.state';

//movie reducer
export const genresReducer = createReducer(
    initialGenreState,
  on(GenreActions.GetAllGenreStart, (state) => ({
    ...state,
    isFetching: true,
    isSuccess: false,
    isError: false,
    genre: null,
    error: null,
  })),
  on(GenreActions.GetAllGenreSuccess, (state, {genre}) => ({
    ...state,
    isFetching: false,
    isSuccess: true,
    isError: false,
    genre,
    error: null,
  })),
  on(GenreActions.GetAllGenreFailure, (state, {error}) => ({
    ...state,
    isFetching: false,
    isSuccess: false,
    isError: true,
    genre: null,
    error
  }))
);