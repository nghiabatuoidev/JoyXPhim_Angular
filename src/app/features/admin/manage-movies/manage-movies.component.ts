import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PaginationAdminComponent } from '../../../shared/components/admin/pagination-admin/pagination-admin.component';
import { ModalAddMovieComponent } from '../../../shared/components/admin/modals/movies/modal-add-movie/modal-add-movie.component';
import { InputSearchAdminComponent } from '../../../shared/components/admin/input-search-admin/input-search-admin.component';
import { ModalEditMovieComponent } from '../../../shared/components/admin/modals/movies/modal-edit-movie/modal-edit-movie.component';
import { ModalViewMovieComponent } from '../../../shared/components/admin/modals/movies/modal-view-movie/modal-view-movie.component';
import { ModalAddEpisodeComponent } from '../../../shared/components/admin/modals/episode/modal-add-episode/modal-add-episode.component';

@Component({
  selector: 'app-manage-movies',
  standalone: true,
  imports: [
    CommonModule,
    PaginationAdminComponent,
    ModalAddMovieComponent,
    ModalEditMovieComponent,
    ModalViewMovieComponent,
    ModalAddEpisodeComponent,
    InputSearchAdminComponent,
  ],
  templateUrl: `./manage-movies.component.html`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManageMoviesComponent {
  isOpenModalAddMovie: boolean = false;
  isOpenModalEditMovie: boolean = false;
  isOpenModalViewMovie: boolean = false;
  isOpenModalAddEpisode: boolean = false;


  handleToggleModalAddMovie: any = () => {
    this.isOpenModalAddMovie = !this.isOpenModalAddMovie;
    if (this.isOpenModalAddMovie) {
      document.body.classList.add('overflow-hidden');
    }else {
      document.body.classList.remove('overflow-hidden');
    }
  };
  handleToggleModalEditMovie: any = () => {
    this.isOpenModalEditMovie = !this.isOpenModalEditMovie;
    if (this.isOpenModalEditMovie) {
      document.body.classList.add('overflow-hidden');
    }else {
      document.body.classList.remove('overflow-hidden');
    }
  };
  handleToggleModalViewMovie: any = () => {
    this.isOpenModalViewMovie = !this.isOpenModalViewMovie;
    if (this.isOpenModalViewMovie) {
      document.body.classList.add('overflow-hidden');
    }else {
      document.body.classList.remove('overflow-hidden');
    }
  };

  handleToggleModalAddEpisode: any = () => {
    this.isOpenModalAddEpisode = !this.isOpenModalAddEpisode;
    if (this.isOpenModalAddEpisode) {
      document.body.classList.add('overflow-hidden');
    }else {
      document.body.classList.remove('overflow-hidden');
    }
  };
}
