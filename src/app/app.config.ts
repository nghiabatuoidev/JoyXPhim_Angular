import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { environment } from './core/environments/environment';
import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';

import { AuthInterceptor } from './core/interceptors/auth.interceptors';
import { authReducer } from './core/store/auth/auth.reducer';
import { movieReducer, moviesReducer } from './core/store/movie/movie.reducer';
import { provideEffects } from '@ngrx/effects';
import { AuthEffects } from './core/store/auth/auth.effect';
import { MovieEffects } from './core/store/movie/movie.effect';
import { categoriesReducer } from './core/store/category/category.reducer';
import { CategoryEffects } from './core/store/category/category.effect';
import { CountryEffects } from './core/store/country/country.effect';
import { countriesReducer } from './core/store/country/country.reducer';
import { statusesReducer } from './core/store/status/status.reducer';
import { StatusEffects } from './core/store/status/status.effect';
import { genresReducer } from './core/store/genre/genre.reducer';
import { GenreEffects } from './core/store/genre/genre.effect';
import { yearRealeasesReducer } from './core/store/year-release/year-release.reducer';
import { YearReleaseEffects } from './core/store/year-release/year-release.effect';
import { langsReducer } from './core/store/lang/lang.reducer';
import { LangEffects } from './core/store/lang/lang.effect';
import { episodeReducer } from './core/store/episode/episode.reducer';
import { EpisodeEffects } from './core/store/episode/episode.effect';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore({
      auth: authReducer,
      movie: movieReducer,
      movies: moviesReducer,
      categories: categoriesReducer,
      countries: countriesReducer,
      statuses: statusesReducer,
      genres: genresReducer,
      yearReleases: yearRealeasesReducer,
      langs: langsReducer,
      episode: episodeReducer,
    }),
    provideEffects([
      AuthEffects,
      MovieEffects,
      CategoryEffects,
      CountryEffects,
      StatusEffects,
      GenreEffects,
      YearReleaseEffects,
      LangEffects,
      EpisodeEffects,
    ]),
    provideHttpClient(),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: environment.production,
    }),
    provideHttpClient(
      // DI-based interceptors must be explicitly enabled.
      withInterceptorsFromDi()
    ),
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    provideAnimations(),
    provideToastr({ timeOut: 3000 }),
  ],
};
