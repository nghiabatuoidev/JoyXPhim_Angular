import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EpisodeService {
  constructor(private http: HttpClient) {}

  // GET
  GetEpisodeId(episodeId: number): Observable<any> {
    return this.http
      .get<any>(`${environment.apiUrl}/episode/${episodeId}`)
      .pipe(
        catchError((error) => {
          return throwError(() => error.error);
        })
      );
  }
  //GET ALL
  GetAllEpisodeByMovieId(movieId: number): Observable<any> {
    return this.http
      .get<any>(`${environment.apiUrl}/episode/get-all/${movieId}`)
      .pipe(
        catchError((error) => {
          return throwError(() => error.error);
        })
      );
  }
  //CREATE
  CreateEpisode(movideId : number, formEpisode: any): Observable<any> {
    return this.http
      .post<any>(`${environment.apiUrl}/episode/add/${movideId}`, formEpisode)
      .pipe(
        catchError((error) => {
          return throwError(() => error.error);
        })
      );
  }
  //UPDATE
  UpdateEpisodeById(EpisodeId: number, formEpisode: any): Observable<any> {
    return this.http
      .put<any>(
        `${environment.apiUrl}/episode/update/${EpisodeId}`,
        formEpisode
      )
      .pipe(
        catchError((error) => {
          return throwError(() => error.error);
        })
      );
  }
    // DELETE
    RemoveEpisodeById(episodeId: number): Observable<any> {
      return this.http
        .delete<any>(`${environment.apiUrl}/episode/remove/${episodeId}`)
        .pipe(
          catchError((error) => {
            return throwError(() => error.error);
          })
        );
    }
}
