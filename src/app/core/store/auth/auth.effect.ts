// auth.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import * as AuthActions from './auth.action';
import { AuthService } from '../../services/auth.service';
import { LocalStorageService } from '../../services/local-storage.service';
import { Router } from '@angular/router';
@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService, private storageService: LocalStorageService, private router: Router) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      mergeMap((action) =>
        this.authService.Login(action.email, action.password).pipe(
          map((user) => {
            console.log(user)
            this.storageService.setItem('auth', user);
            return AuthActions.loginSuccess({ user })
          }),
          tap(() => this.router.navigate(['/admin'])),
          catchError((error) => {
            console.log(error)
            return of(AuthActions.loginFailure({ error }));
          })
        )
      )
    )
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.logout), // Lắng nghe hành động logout
      tap(() => {
        // Xóa thông tin xác thực khỏi storage
        this.storageService.removeItem('auth');
        this.router.navigate(['/admin/login']);
      })
    ),
    { dispatch: false } // Không dispatch thêm action nào khác
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
