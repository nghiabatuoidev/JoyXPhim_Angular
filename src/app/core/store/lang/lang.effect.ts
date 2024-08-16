import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as LangActions from './lang.action';
import { LangService } from '../../services/lang.service';

@Injectable()
export class LangEffects {
  constructor(private actions$: Actions, private langService: LangService) {}
  //effect get list genres
  langs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LangActions.GetAllLangStart),
      mergeMap(() =>
        this.langService.GetAllLang().pipe(
          map((lang) => {
            return LangActions.GetAllLangSuccess({ lang });
          }),
          catchError((error) => {
            return of(LangActions.GetAllLangFailure({ error }));
          })
        )
      )
    )
  );
}
