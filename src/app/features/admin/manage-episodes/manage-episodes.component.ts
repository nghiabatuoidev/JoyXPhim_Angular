import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PaginationAdminComponent } from '../../../shared/components/admin/pagination-admin/pagination-admin.component';
import { Observable, Subject, takeUntil } from 'rxjs';

import { select, Store } from '@ngrx/store';
import { selectAllMovies } from '../../../core/store/movie/movie.selector';

import * as MovieActions from '../../../core/store/movie/movie.action';
import * as EpisodeActions from '../../../core/store/episode/episode.action';
import { ModalListEpisodeComponent } from '../../../shared/components/admin/modals/episode/modal-list-episode/modal-list-episode.component';
import { InputSearchAdminComponent } from '../../../shared/components/admin/input-search-admin/input-search-admin.component';
@Component({
  selector: 'app-manage-episodes',
  standalone: true,
  imports: [CommonModule, PaginationAdminComponent, ModalListEpisodeComponent, InputSearchAdminComponent],
  templateUrl: `./manage-episodes.component.html`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManageEpisodesComponent {
  isOpenModalListEpisode: boolean = false;
  private destroy$ = new Subject<void>();

  movies$: Observable<any>;
  serverId : any;
  page: number = 1; // Trang hiện tại
  pageSize: number = 10; // Số lượng mục trên mỗi trang
  totalPages: number = 0; // Tổng số mục (tổng số phim)
  constructor(private store: Store) {
    this.movies$ = this.store.pipe(select(selectAllMovies));
  }
  
  ngOnInit(): void {
    this.handleGetAllMovie();

     //get total page
     this.movies$
     .pipe(
       takeUntil(this.destroy$) // Complete subscription when component is destroyed
     )
     .subscribe((movies) => {
       this.totalPages = movies?.totalPages;
     });
  }
  ngOnDestroy(): void {
    this.destroy$.next(); // Phát ra giá trị để hủy tất cả các đăng ký
    this.destroy$.complete(); // Hoàn tất Subject
  }
  handleGetAllEpisodes(movieId: number, serverId: any = null) {
    this.store.dispatch(EpisodeActions.GetAllEpisodeStart({ movieId })); // Thông báo component cha yêu cầu lấy tất cả các episode
    this.serverId = serverId;
  }
  handleGetAllMovie(): void {
    this.store.dispatch(
      MovieActions.GetAllMovieStart({
        page: this.page,
        pageSize: this.pageSize,
      })
    );
  }
  onPageChange(event: { page: number; pageSize: number }): void {
    const { page, pageSize } = event;

    this.page = page;
    this.pageSize = pageSize;
    this.handleGetAllMovie();
  }
  handleToggleModalListEpisode = (): void => {
    this.isOpenModalListEpisode = !this.isOpenModalListEpisode;
  };
}
