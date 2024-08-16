import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  // Tạo HttpParams với các tham số query
  GetAllCategory(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/category/get-all`).pipe(
      catchError((error) => {
        return throwError(() => error.error);
      })
    );
  }
}