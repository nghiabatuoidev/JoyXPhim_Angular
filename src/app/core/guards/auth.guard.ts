import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, take } from 'rxjs/operators'; 
import { selectCurrentUser } from '../store/auth/auth.selector'; // Selector kiểm tra đăng nhập

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private store: Store, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.store.select(selectCurrentUser).pipe(
      take(1),
      map((data: boolean) => {
        if (!data) {
          this.router.navigate(['/admin/login']);
          return false;
        }
        return true;
      }),
      catchError(() => {
        this.router.navigate(['/admin/login']);
        return of(false);
      })
    );
  }
}
