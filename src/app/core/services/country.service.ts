import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  constructor(private http: HttpClient) {}

  // Tạo HttpParams với các tham số query
  GetAllCountry(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/Country/get-all`).pipe(
      catchError((error) => {
        return throwError(() => error.error);
      })
    );
  }
}