import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import * as CategoriesAction from './category.action';
import { CategoryService } from '../../services/category.service';

@Injectable()
export class CategoryEffects {
  constructor(private actions$: Actions, private categoryService: CategoryService) {}
  //effect get list categories
  categories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CategoriesAction.GetAllCategoryStart),
      mergeMap(() =>
        this.categoryService.GetAllCategory().pipe(
          map((category) => {
            return CategoriesAction.GetAllCategorySuccess({ category });
          }),
          catchError((error) => {
            return of(CategoriesAction.GetAllCategoryFailure({ error }));
          })
        )
      )
    )
  );
};