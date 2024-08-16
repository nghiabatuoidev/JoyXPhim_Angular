import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as YearReleaseActions from './year-release.action';
import { YearReleaseService } from '../../services/year-release.service';

@Injectable()
export class YearReleaseEffects {
  constructor(
    private actions$: Actions,
    private yearReleaseService: YearReleaseService
  ) {}
  //effect get list genres
  yearReleases$ = createEffect(() =>
    this.actions$.pipe(
      ofType(YearReleaseActions.GetAllYearReleaseStart),
      mergeMap(() =>
        this.yearReleaseService.GetAllYearRelease().pipe(
          map((yearRelease) => {
            return YearReleaseActions.GetAllYearReleaseSuccess({ yearRelease });
          }),
          catchError((error) => {
            return of(YearReleaseActions.GetAllYearReleaseFailure({ error }));
          })
        )
      )
    )
  );
}
