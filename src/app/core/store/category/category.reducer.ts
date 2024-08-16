import { createReducer, on } from '@ngrx/store';
import * as CategoriesAction from './category.action';
import { initialCategoriesState } from './category.state';

//movie reducer
export const categoriesReducer = createReducer(
  initialCategoriesState,
  on(CategoriesAction.GetAllCategoryStart, (state) => ({
    ...state,
    isFetching: true,
    isSuccess: false,
    isError: false,
    category: null,
    error: null,
  })),
  on(CategoriesAction.GetAllCategorySuccess, (state, {category}) => ({
    ...state,
    isFetching: false,
    isSuccess: true,
    isError: false,
    category,
    error: null,
  })),
  on(CategoriesAction.GetAllCategoryFailure, (state, {error}) => ({
    ...state,
    isFetching: false,
    isSuccess: false,
    isError: true,
    category: null,
    error
  }))
);