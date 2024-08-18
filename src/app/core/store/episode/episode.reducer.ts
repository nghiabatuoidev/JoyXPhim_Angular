import { createReducer, on } from '@ngrx/store';
import * as LangActions from './episode.action';
import { initialEpisodeState } from './episode.state';

//movie reducer
export const episodeReducer = createReducer(
    initialEpisodeState,
  on(LangActions.GetAllEpisodeStart, (state) => ({
    ...state,
    isFetching: true,
    isSuccess: false,
    isError: false,
    episodes: null,
    error: null,
  })),
  on(LangActions.GetAllEpisodeSuccess, (state, { episodes }) => ({
    ...state,
    isFetching: false,
    isSuccess: true,
    isError: false,
    episodes,
    error: null,
  })),
  on(LangActions.GetAllEpisodeFailure, (state, { error }) => ({
    ...state,
    isFetching: false,
    isSuccess: false,
    isError: true,
    episodes: null,
    error,
  })),
  //
  on(LangActions.GetEpisodeStart, (state) => ({
    ...state,
    isFetching: true,
    isSuccess: false,
    isError: false,
    episode: null,
    error: null,
  })),
  on(LangActions.GetEpisodeSuccess, (state, { episode }) => ({
    ...state,
    isFetching: false,
    isSuccess: true,
    isError: false,
    episode,
    error: null,
  })),
  on(LangActions.GetEpisodeFailure, (state, { error }) => ({
    ...state,
    isFetching: false,
    isSuccess: false,
    isError: true,
    episode: null,
    error,
  }))
);
