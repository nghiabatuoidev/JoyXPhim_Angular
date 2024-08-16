import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as SatusActions from './status.action';
import { StatusService } from '../../services/status.service';

@Injectable()
export class StatusEffects {
  constructor(
    private actions$: Actions,
    private statusService: StatusService
  ) {}
  //effect get list genres
  statuses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SatusActions.GetAllStatusesStart),
      mergeMap(() =>
        this.statusService.GetAllStatus().pipe(
          map((status) => {
            return SatusActions.GetAllStatusesSuccess({ status });
          }),
          catchError((error) => {
            return of(SatusActions.GetAllStatusesFailure({ error }));
          })
        )
      )
    )
  );
}
