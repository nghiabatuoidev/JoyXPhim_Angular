import { createReducer, on } from '@ngrx/store';
import { initialMoviesState, initialMovieState } from './movie.state';
import * as MovieActions from './movie.action';

//movie reducer
export const movieReducer = createReducer(
  initialMovieState,
  on(MovieActions.GetMovieStart, (state) => ({
    ...state,
    isFetching: true,
    isSuccess: false,
    isError: false,
    movie: null,
    error: null,
  })),
  on(MovieActions.GetMovieSuccess, (state, {movie}) => ({
    ...state,
    isFetching: false,
    isSuccess: true,
    isError: false,
    movie: movie,
    error: null,
  })),
  on(MovieActions.GetMovieFailure, (state, {error}) => ({
    ...state,
    isFetching: false,
    isSuccess: false,
    isError: true,
    movie: null,
    error: error,
  }))
);
//movies reducer
export const moviesReducer = createReducer(
  initialMoviesState,
  on(MovieActions.GetAllMovieStart, (state) => ({
    ...state,
    isFetching: true,
    isSuccess: false,
    isError: false,
    movie: null,
    error: null,
  })),
  on(MovieActions.GetAllMovieSuccess, (state, {movie}) => ({
    ...state,
    isFetching: false,
    isSuccess: true,
    isError: false,
    movie: movie,
    error: null,
  })),
  on(MovieActions.GetAllMovieFailure, (state, {error}) => ({
    ...state,
    isFetching: false,
    isSuccess: false,
    isError: true,
    movie: null,
    error: error,
  }))
);


