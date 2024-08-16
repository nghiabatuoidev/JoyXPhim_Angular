import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import * as MovieActions from './movie.action';
import { MovieService } from '../../services/movie.service';

@Injectable()
export class MovieEffects {
  constructor(private actions$: Actions, private movieService: MovieService) {}
  //effect get list movies
  movies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MovieActions.GetAllMovieStart),
      mergeMap((action) =>
        this.movieService.GetAllMovie(action.page, action.pageSize).pipe(
          map((movie) => {
            return MovieActions.GetAllMovieSuccess({ movie });
          }),
          catchError((error) => {
            return of(MovieActions.GetAllMovieFailure({ error }));
          })
        )
      )
    )
  );
  //effect get movie
  movie$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MovieActions.GetMovieStart),
      mergeMap((action) =>
        this.movieService.GetMovie(action.movieId).pipe(
          map((movie) => {
            return MovieActions.GetMovieSuccess({ movie });
          }),
          catchError((error) => {
            return of(MovieActions.GetMovieFailure({ error }));
          })
        )
      )
    )
  );
};