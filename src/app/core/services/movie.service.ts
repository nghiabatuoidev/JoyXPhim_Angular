import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  GetMovie(movieId: number): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/movie/${movieId}`).pipe(
      catchError((error) => {
        return throwError(() => error.error);
      })
    );
  }
  // Tạo HttpParams với các tham số query
  GetAllMovie(page: number = 1, pageSize: number = 10): Observable<any> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('pageSize', pageSize.toString());
    return this.http
      .get<any>(`${environment.apiUrl}/movie/list`, { params })
      .pipe(
        catchError((error) => {
          return throwError(() => error.error);
        })
      );
  }
  //CREATE MOVIE
  CreateMovie(movie: any): Observable<any>{
    console.log(movie)
    return this.http.post<any>(`${environment.apiUrl}/movie/add`, movie).pipe(
      catchError((error) => {
        console.log(error);
        return throwError(() => error.error);
      })
    );
  }
  //EDIT MOVIE
  UpdateMovieById(movieId:number, movie: any): Observable<any>{
    return this.http.put<any>(`${environment.apiUrl}/movie/update/${movieId}`, movie).pipe(
      catchError((error) => {
        console.log(error);
        return throwError(() => error.error);
      })
    );
  }
  //REMOVE MOVIE
  RemoveMovieById(movieId:number): Observable<any>{
    return this.http.delete<any>(`${environment.apiUrl}/movie/remove/${movieId}`).pipe(
      catchError((error) => {
        console.log(error);
        return throwError(() => error.error);
      })
    );
  }
   //REMOVE MOVIE RANGE IDS
   RemoveRangeMovieById(movieIds: number[]): Observable<any> {
    const options = {
      body: movieIds, // Đặt movieIds vào phần body của yêu cầu
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  
    return this.http.request<any>('DELETE', `${environment.apiUrl}/movie/remove-range`, options).pipe(
      catchError((error) => {
        console.log(error);
        return throwError(() => error.error);
      })
    );
  }
}
