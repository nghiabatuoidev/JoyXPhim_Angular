import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import * as GenreActions from './genre.action';
import { GenreService } from '../../services/genre.service';

@Injectable()
export class GenreEffects {
  constructor(
    private actions$: Actions,
    private genreService: GenreService
  ) {}
  //effect get list genres
  genres$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GenreActions.GetAllGenreStart),
      mergeMap(() =>
        this.genreService.GetAllGenres().pipe(
          map((genre) => {
            return GenreActions.GetAllGenreSuccess({ genre });
          }),
          catchError((error) => {
            return of(GenreActions.GetAllGenreFailure({ error }));
          })
        )
      )
    )
  );
}
