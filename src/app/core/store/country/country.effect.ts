import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import * as CountriesAction from './country.action';
import { CountryService } from '../../services/country.service';

@Injectable()
export class CountryEffects {
  constructor(private actions$: Actions, private countryService: CountryService) {}
  //effect get list countries
  countries$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CountriesAction.GetAllCountryStart),
      mergeMap(() =>
        this.countryService.GetAllCountry().pipe(
          map((country) => {
            return CountriesAction.GetAllCountrySuccess({ country });
          }),
          catchError((error) => {
            return of(CountriesAction.GetAllCountryFailure({ error }));
          })
        )
      )
    )
  );
};