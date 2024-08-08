import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
  
})
export class AuthService {
  private loginUrl = 'http://localhost:5049/api/v1/account/login-admin';
  constructor(private http: HttpClient) {}

  // Hàm đăng nhập
  login(email: string, password: string): Observable<any> {
    const body = { email, password }; // Dữ liệu dưới dạng JSON
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');
    return this.http.post<any>(this.loginUrl, body).pipe(
      tap((response) => {
        return response;
      })
    );
  }
}
