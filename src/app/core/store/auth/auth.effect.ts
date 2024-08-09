// auth.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import * as AuthActions from './auth.action';
import { AuthService } from '../../services/auth.service';
import { LocalStorageService } from '../../services/local-storage.service';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService, private storageService: LocalStorageService) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      mergeMap((action) =>
        this.authService.login(action.email, action.password).pipe(
          map((user) => {
            this.storageService.setItem('auth', user);
            return AuthActions.loginSuccess({ user })
          }),
          catchError((error) => {
            return of(AuthActions.loginFailure({ error }));
          })
        )
      )
    )
  );

  // saveAuthState$ = createEffect(
  //   () =>
  //     this.actions$.pipe(
  //       ofType(AuthActions.loginSuccess),
  //       tap(action => {
  //         if (action.type === AuthActions.loginSuccess.type) {
  //           this.storageService.setItem('auth', action.user);
  //         } 
  //         // else if (action.type === AuthActions.logout.type) {
  //         //   this.storageService.removeItem('authState');
  //         // }
  //       })
  //     ),
  //   { dispatch: false } // Không cần dispatch hành động mới
  // );
}
