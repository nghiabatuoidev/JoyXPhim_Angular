import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  Subject,
  takeUntil,
  tap,
} from 'rxjs';
import { Store } from '@ngrx/store';
import { MovieService } from '../../../../core/services/movie.service';
import * as MovieActions from '../../../../core/store/movie/movie.action';
@Component({
  selector: 'app-input-search-admin',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: `./input-search-admin.component.html`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputSearchAdminComponent {
  searchControl = new FormControl();
  private onDestroy$ = new Subject<void>();
  isLoading: boolean = false;
  pageCurrent: number = 1;
  pageSize: number = 10;
  totalPage: number = 0;
  constructor(
    private cdr: ChangeDetectorRef,
    private store: Store,
    private movieService: MovieService
  ) {
    this.searchControl.valueChanges
      .pipe(
        map((value: string) => value.trim()),
        //lọc value > 5 kí tự
        filter((value) => value.length >= 4 || value.length === 0),
        distinctUntilChanged(),
        debounceTime(500),
        tap(() => {
          this.isLoading = true;
          this.cdr.detectChanges(); //cập nhật lại view của component và component con
        }),
        takeUntil(this.onDestroy$)
      )
      .subscribe((value) => {
        if (value.length === 0) {
          setTimeout(() => {
            this.isLoading = false;
            this.cdr.detectChanges();
            this.handleGetAllMovie(this.pageCurrent, this.pageSize);
          }, 1000);
        } else {
          setTimeout(() => {
            this.isLoading = false;
            this.cdr.detectChanges();
            this.handleFindMoveBykeyword(value);
          }, 1000);
        }
      });
  }
  ngOnInit(): void {}
  // ngOnDestroy sẽ được gọi khi 1 component sắp bị hủy
  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
  //
  handleFindMoveBykeyword(keyword: string): void {
    this.movieService
      .FindMovieByKeyword(keyword)
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((movie) => {
        this.store.dispatch(MovieActions.GetAllMovieSuccess({ movie }));
      });
  }
  //
  handleGetAllMovie(page: number, pageSize: number): void {
    page = this.pageCurrent;
    pageSize = this.pageSize;
    this.store.dispatch(MovieActions.GetAllMovieStart({ page, pageSize }));
  }
}
