import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { jwtDecode } from 'jwt-decode';
import { select, Store } from '@ngrx/store';
import { selectCurrentUser } from '../store/auth/auth.selector';
import { logout } from '../store/auth/auth.action';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private excludedUrls = ['http://localhost:5049/api/v1/account/login-admin'];

  constructor(private store: Store, private router : Router) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    //   // Bỏ qua yêu cầu đến các URL trong danh sách excludedUrls
    if (this.excludedUrls.some((url) => req.url.includes(url))) {
      return next.handle(req);
    }
    return this.store.pipe(
      select(selectCurrentUser),
      switchMap((user) => {
        const token = user?.data?.accessToken;

        if (token) {
          const decodedToken: any = jwtDecode(token);
          const isTokenExpired = decodedToken.exp < new Date().getTime() / 1000;

          if (isTokenExpired) {
            // Token đã hết hạn, dispatch hành động logout và chuyển hướng
            this.store.dispatch(logout());
            // Chuyển hướng đến trang đăng nhập hoặc trang khác nếu cần
            this.router.navigate(['/admin/login']);

            // Không gửi yêu cầu HTTP tiếp theo
            return next.handle(req); // Có thể thay đổi nếu cần xử lý cụ thể
          }

          const authReq = req.clone({
            setHeaders: {
              authorization: `Bearer ${token}`,
            },
          });
        
          return next.handle(authReq);
        }
        this.router.navigate(['/admin/login']);
        console.log(req);
        return next.handle(req);
      }),
      catchError((err) => {
        console.log(err);
        // Xử lý lỗi
        return next.handle(req);
      })
    );
  }
}