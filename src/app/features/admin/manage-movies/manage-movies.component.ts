import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PaginationAdminComponent } from '../../../shared/components/admin/pagination-admin/pagination-admin.component';
import { ModalAddMovieComponent } from '../../../shared/components/admin/modals/movies/modal-add-movie/modal-add-movie.component';
import { InputSearchAdminComponent } from '../../../shared/components/admin/input-search-admin/input-search-admin.component';
import { ModalEditMovieComponent } from '../../../shared/components/admin/modals/movies/modal-edit-movie/modal-edit-movie.component';
import { ModalViewMovieComponent } from '../../../shared/components/admin/modals/movies/modal-view-movie/modal-view-movie.component';
import { ModalAddEpisodeComponent } from '../../../shared/components/admin/modals/episode/modal-add-episode/modal-add-episode.component';
import { select, Store } from '@ngrx/store';
import * as MovieActions from '../../../core/store/movie/movie.action';
import { Observable, Subject, takeUntil, tap } from 'rxjs';
import { selectAllMovies } from '../../../core/store/movie/movie.selector';
import { MovieService } from '../../../core/services/movie.service';
import { initFlowbite } from 'flowbite';
import { NgxPaginationModule } from 'ngx-pagination';
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
    NgxPaginationModule,
  ],
  templateUrl: `./manage-movies.component.html`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManageMoviesComponent {
  private destroy$ = new Subject<void>();
  movies$: Observable<any>;

  isOpenModalAddMovie: boolean = false;
  isOpenModalEditMovie: boolean = false;
  isOpenModalViewMovie: boolean = false;
  isOpenModalAddEpisode: boolean = false;
  isCheckedAll: boolean = false;
  selectCheckedIds: any = [];

  page: number = 1; // Trang hiện tại
  pageSize: number = 10; // Số lượng mục trên mỗi trang
  totalPages: number = 0; // Tổng số mục (tổng số phim)

  movieIdToAddEpisode: number = 0; // biến dùng để truyền qua modal create episode

  constructor(
    private store: Store,
    private movieService: MovieService,
    private toastr: ToastrService
  ) {
    this.movies$ = this.store.pipe(select(selectAllMovies));
  }

  ngOnInit(): void {
    this.handleGetAllMovie();
    initFlowbite();
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
  // Xử lý khi người dùng thay đổi trang
  onPageChange(event: { page: number; pageSize: number }): void {
    const { page, pageSize } = event;

    this.page = page;
    this.pageSize = pageSize;
    this.handleGetAllMovie();
  }
  //toggle input checked movie to remove
  handleToggleChecked() {
    this.isCheckedAll = !this.isCheckedAll;
    this.selectCheckedIds = [];
    const checkboxItems = document.querySelectorAll(
      'input[type="checkbox"]'
    ) as NodeListOf<HTMLInputElement>;
    if (this.isCheckedAll) {
      checkboxItems.forEach((checkbox, index) => {
        //check từ item thứ 2
        if (index > 0) {
          // Bỏ qua checkbox đầu tiên (vị trí 0)
          checkbox.checked = this.isCheckedAll;
          this.selectCheckedIds.push(checkbox.value);
        }
      });
    } else {
      checkboxItems.forEach((checkbox, index) => {
        //check từ item thứ 2
        if (index > 0) {
          // Bỏ qua checkbox đầu tiên (vị trí 0)
          checkbox.checked = this.isCheckedAll;
          const index = this.selectCheckedIds.indexOf(checkbox.value);
          if (index > -1) {
            this.selectCheckedIds.splice(index, 1);
          }
        }
      });
    }
  }
  //change input checked movie to remove range
  onCheckboxChange(event: Event) {
    const item = event.target as HTMLInputElement;
    if (item.checked) {
      this.selectCheckedIds.push(item.value);
    } else {
      const index = this.selectCheckedIds.indexOf(item.value);
      if (index > -1) {
        this.selectCheckedIds.splice(index, 1);
      }
    }
    console.log(this.selectCheckedIds);
  }

  // CRUD MOVIE
  handleRemoveRangeMovieByIds(movieIds: any) {
    if (movieIds.length > 0) {
      this.movieService
        .RemoveRangeMovieById(movieIds)
        .pipe(takeUntil(this.destroy$))
        .subscribe(() => {
          this.selectCheckedIds = [];
          this.handleGetAllMovie();
          this.toastr.success(`Remove ${movieIds.length} movie successfully!`,"Thông Báo");
        });
    }else {
      this.toastr.error(`Remove failed! You don't choose movie to remove!`, "Thông Báo");
    }
  }
  handleDeleteMovieById(movieId: number): void {
    if (movieId) {
      this.movieService
        .RemoveMovieById(movieId)
        .pipe(takeUntil(this.destroy$))
        .subscribe(() => {
          this.showSuccess('Xóa phim thành công!', 'Thông báo');
          this.handleGetAllMovie();
        });
    }
  }
  handleGetMovie(movieId: number): void {
    if (movieId) {
      this.store.dispatch(MovieActions.GetMovieStart({ movieId }));
    }
  }
  handleGetAllMovie(): void {
    this.store.dispatch(
      MovieActions.GetAllMovieStart({
        page: this.page,
        pageSize: this.pageSize,
      })
    );
    // this.movies$
    //   .pipe(
    //     takeUntil(this.destroy$), // Chỉ nhận dữ liệu cho đến khi destroy$ phát ra giá trị
    //     tap((movies) => {
    //       if (movies == null) {
    //         // Nếu danh sách phim trống, dispatch hành động để lấy dữ liệu
    //         this.store.dispatch(MovieActions.GetAllMovieStart());
    //       }
    //     })
    //   )
    //   .subscribe(); // Đăng ký để thực hiện tác động, không cần xử lý kết quả
  }
  //TOAST
  showSuccess(message: string, title: string): any {
    this.toastr.success(message, title);
  }

  handleToggleModalAddMovie: any = () => {
    this.isOpenModalAddMovie = !this.isOpenModalAddMovie;
    if (this.isOpenModalAddMovie) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
      this.handleGetAllMovie();
    }
  };
  handleToggleModalEditMovie: any = () => {
    this.isOpenModalEditMovie = !this.isOpenModalEditMovie;
    if (this.isOpenModalEditMovie) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
      this.handleGetAllMovie();
    }
  };
  handleToggleModalViewMovie: any = () => {
    this.isOpenModalViewMovie = !this.isOpenModalViewMovie;
    if (this.isOpenModalViewMovie) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  };
  handleToggleModalAddEpisode: any = (movieId: number = 0) => {
    this.isOpenModalAddEpisode = !this.isOpenModalAddEpisode;
    if (this.isOpenModalAddEpisode) {
      if (movieId != null) this.movieIdToAddEpisode = movieId;
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  };
}
