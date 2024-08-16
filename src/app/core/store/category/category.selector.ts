import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ICategoryState } from './category.state';

export const selectCategoriesState = createFeatureSelector<ICategoryState>('categories');
export const selectCategories = createSelector(
    selectCategoriesState,
  (state: ICategoryState) => state.category
);