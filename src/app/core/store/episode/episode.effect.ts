import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as EpisodeActions from './episode.action';
import { EpisodeService } from '../../services/episode.service';

@Injectable()
export class EpisodeEffects {
  constructor(private actions$: Actions, private episodeService: EpisodeService) {}
  //effect get list genres
  episodes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EpisodeActions.GetAllEpisodeStart),
      mergeMap((action) =>
        this.episodeService.GetAllEpisodeByMovieId(action.movieId).pipe(
          map((episodes) => {
            return EpisodeActions.GetAllEpisodeSuccess({ episodes });
          }),
          catchError((error) => {
            return of(EpisodeActions.GetAllEpisodeFailure({ error }));
          })
        )
      )
    )
  );
  //effect get list genres
  episode$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EpisodeActions.GetEpisodeStart),
      mergeMap((action) =>
        this.episodeService.GetEpisodeId(action.episodeId).pipe(
          map((episode) => {
            return EpisodeActions.GetEpisodeSuccess({episode});
          }),
          catchError((error) => {
            return of(EpisodeActions.GetEpisodeFailure({ error }));
          })
        )
      )
    )
  );
}
