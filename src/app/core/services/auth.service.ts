import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  // Hàm đăng nhập
  Login(email: string, password: string): Observable<any> {
    const body = { email, password }; // Dữ liệu dưới dạng JSON
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<any>(environment.apiUrl + '/account/login-admin', body, { headers }).pipe(
      catchError(error => {
        return throwError(() => error.error);
      })
    );
  }
}
