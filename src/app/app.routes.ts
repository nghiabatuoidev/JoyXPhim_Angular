import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';
import { LoginComponent } from './features/auth/login/login.component';
import { NotFoundComponent } from './features/not-found/not-found.component';
import { FilmComponent } from './features/film/film.component';
import { TheLoaiComponent } from './features/the-loai/the-loai.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dang-nhap', component: LoginComponent },
  { path: 'film', component: FilmComponent },
  { path: 'the-loai', component: TheLoaiComponent },
  
  { path: '**', component: NotFoundComponent },
];
