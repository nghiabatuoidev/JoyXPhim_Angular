import { createReducer, on } from '@ngrx/store';
import * as LangActions from './lang.action';
import { initialLangState } from './lang.state';

//movie reducer
export const langsReducer = createReducer(
  initialLangState,
  on(LangActions.GetAllLangStart, (state) => ({
    ...state,
    isFetching: true,
    isSuccess: false,
    isError: false,
    lang: null,
    error: null,
  })),
  on(LangActions.GetAllLangSuccess, (state, { lang }) => ({
    ...state,
    isFetching: false,
    isSuccess: true,
    isError: false,
    lang,
    error: null,
  })),
  on(LangActions.GetAllLangFailure, (state, { error }) => ({
    ...state,
    isFetching: false,
    isSuccess: false,
    isError: true,
    lang: null,
    error,
  }))
);
