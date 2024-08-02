import { Routes } from '@angular/router';

import { LoginAdminComponent } from './features/admin/login-admin/login-admin.component';
import { UsersComponent } from './features/clients/user.component';
import { HomeAdminComponent } from './features/admin/home-admin/home-admin.component';
import { ManageUserComponent } from './features/admin/manage-users/manage-users.component';
import { HomeComponent } from './features/clients/home/home.component';
import { LoginComponent } from './features/clients/auth/login/login.component';
import { PhimComponent } from './features/clients/phim/phim.component';
import { TheLoaiComponent } from './features/clients/the-loai/the-loai.component';
import { ListPhimComponent } from './features/clients/list-phim/phim-le.component';
import { NotFoundComponent } from './features/clients/not-found/not-found.component';
import { ManageMoviesComponent } from './features/admin/manage-movies/manage-movies.component';
import { ManageEpisodesComponent } from './features/admin/manage-episodes/manage-episodes.component';

export const routes: Routes = [
  //user
  {
    path: '',
    component: UsersComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'dang-nhap', component: LoginComponent },
      { path: 'phim/:detail', component: PhimComponent },
      { path: 'the-loai', component: TheLoaiComponent },
      { path: 'list-phim/:detail', component: ListPhimComponent },
    ],
  },
  //admin
  { path: 'admin/login', component: LoginAdminComponent },
  { path: 'admin', component: HomeAdminComponent ,
    children: [
      {path: '', component: ManageUserComponent},
      {path: 'manage-users', component: ManageUserComponent},
      {path: 'manage-movies', component: ManageMoviesComponent},
      {path: 'manage-episodes', component: ManageEpisodesComponent},

    ]
  },
  
  { path: '**', component: NotFoundComponent },
];

export class RoutesURL {
  // Khai báo các URL route
  public static readonly HOME = '/home';
  public static readonly LOGIN = '/dang-nhap';
  public static readonly FILM = '/film';
  public static readonly THELOAI = '/the-loai';
  public static readonly QUOCGIA = '/quoc-gia';
  public static readonly PHIMMOI = '/phim-moi';
  public static readonly PHIMBO = '/phim-bo';
  public static readonly PHIMLE = '/phim-le';
  public static readonly PHIMCHIEURAP = '/phim-chieu-rap';
  public static readonly NAMPHATHANH = '/nam-phat-hanh';
  public static readonly TRAILER = '/trailer';
}
