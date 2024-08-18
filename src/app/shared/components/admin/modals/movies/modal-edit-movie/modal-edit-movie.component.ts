import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subject, take, takeUntil, tap } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { selectCategories } from '../../../../../../core/store/category/category.selector';
import * as CategoryActions from '../../../../../../core/store/category/category.action';
import * as CountryActions from '../../../../../../core/store/country/country.action';
import * as StatusActions from '../../../../../../core/store/status/status.action';
import * as GenreActions from '../../../../../../core/store/genre/genre.action';
import * as YearReleaseActions from '../../../../../../core/store/year-release/year-release.action';
import * as LangActions from '../../../../../../core/store/lang/lang.action';
import { selectCountries } from '../../../../../../core/store/country/country.selector';
import { selectStatuses } from '../../../../../../core/store/status/status.selector';
import { selectGenres } from '../../../../../../core/store/genre/genre.selector';
import { selectYearRelaseses } from '../../../../../../core/store/year-release/year-release.selector';
import { selectLangs } from '../../../../../../core/store/lang/lang.selector';
import { ClickOutsideDirective } from '../../../../../directives/click-outside.directive';
import { MovieService } from '../../../../../../core/services/movie.service';
import { selectMovie } from '../../../../../../core/store/movie/movie.selector';

@Component({
  selector: 'app-modal-edit-movie',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ClickOutsideDirective],
  templateUrl: `./modal-edit-movie.component.html`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalEditMovieComponent {
  @Output() triggerToggleModalEditMovieEvent = new EventEmitter<void>();
  isOpenMuitilSelectDropdownCategories: boolean = false;
  isOpenMuitilSelectDropdownCountries: boolean = false;
  private destroy$ = new Subject<void>();
  movie$: Observable<any>;
  categories$: Observable<any>;
  countries$: Observable<any>;
  status$: Observable<any>;
  genres$: Observable<any>;
  yearReleases$: Observable<any>;
  langs$: Observable<any>;
  addMovieForm: FormGroup;
  selectedCategoryIds: number[] = [];
  selectedCountryIds: number[] = [];
  selectedCoutnryIdsToCompare : number[] = [];
  selectedCountryIdsToCompare : number[] = [];
  selectedCategoryIdsToCompare : number[] = [];
  selectedCategoryNames: string[] = [];
  selectedCountryNames: string[] = [];
  private originalFormValue: any;
  @ViewChild('chooseRef') chooseParagraph!: ElementRef;
  constructor(
    private store: Store,
    private fb: FormBuilder,
    private movieService: MovieService,
    private toastr: ToastrService
  ) {
    this.addMovieForm = this.fb.group({
      MovieName: ['', [Validators.required]],
      MovieOriginName: ['', [Validators.required]],
      Slug: ['', Validators.required],
      ThumbUrl: ['', Validators.required],
      MovieTime: ['', Validators.required],
      Quality: ['', Validators.required],
      LangId: ['', Validators.required],
      TrailerUrl: [null],
      DirectorName: [null],
      ActorName: [null],
      IsSubDocquyen: [false],
      IsChieurap: [false],
      IsTrending: [false],
      MovieContent: [null],
      TypeId: ['', Validators.required],
      StatusId: ['', Validators.required],
      YearReleaseId: ['', Validators.required],
      Category_ids: [[], Validators.required],
      Country_ids: [[], Validators.required],
    });
    this.movie$ = this.store.pipe(select(selectMovie));
    this.categories$ = this.store.pipe(select(selectCategories));
    this.countries$ = this.store.pipe(select(selectCountries));
    this.status$ = this.store.pipe(select(selectStatuses));
    this.genres$ = this.store.pipe(select(selectGenres));
    this.yearReleases$ = this.store.pipe(select(selectYearRelaseses));
    this.langs$ = this.store.pipe(select(selectLangs));
  }
  ngOnInit(): void {
    this.handleGetAllStatus();
    this.handleGetAllGenre();
    this.handleGetAllYearRelease();
    this.handleGetAllLang();
    this.onInitFormAddMovie();
  }
  onInitFormAddMovie() {
    this.movie$
      .pipe(
        takeUntil(this.destroy$),
        tap((movie) => {
          movie?.data?.countriesName.forEach((countryName: string) => {
            this.selectedCountryNames.push(countryName);
          });
          movie?.data?.country_ids.forEach((countryId: number) => {
            this.selectedCountryIds.push(countryId);
            this.selectedCountryIdsToCompare.push(countryId);
          });
          movie?.data?.categoriesName.forEach((categoryName: string) => {
            this.selectedCategoryNames.push(categoryName);
          });
          movie?.data?.category_ids.forEach((categoryId: number) => {
            this.selectedCategoryIds.push(categoryId);
            this.selectedCategoryIdsToCompare.push(categoryId);
          });

          this.addMovieForm.patchValue({
            MovieName: movie?.data?.movieName,
            MovieOriginName: movie?.data?.movieOriginName,
            Quality: movie?.data?.quality,
            Slug: movie?.data?.slug,
            ThumbUrl: movie?.data?.thumbUrl,
            MovieTime: movie?.data?.movieTime,
            TrailerUrl: movie?.data?.trailerUrl,
            DirectorName: movie?.data?.directorName,
            ActorName: movie?.data?.actorName,
            IsSubDocquyen: movie?.data?.isSubDocquyen,
            IsChieurap: movie?.data?.isChieurap,
            IsTrending: movie?.data?.isTrending,
            MovieContent: movie?.data?.movieContent,
            LangId: movie?.data?.langId,
            TypeId: movie?.data?.typeId,
            StatusId: movie?.data?.statusId,
            YearReleaseId: movie?.data?.yearReleaseId,
            Category_ids: this.selectedCategoryIds,
            Country_ids: this.selectedCountryIds,
          });
          //
          this.originalFormValue = { ...this.addMovieForm.value };
          // Cập nhật giá trị mặc định cho form
        })
      )
      .subscribe();
  }
  onSubmitEditMovie(movieId: number): void {
    const formValue = this.addMovieForm.value;
    if (this.addMovieForm.valid) {
      // So sánh giá trị mới với giá trị cũ
        const isChanged = JSON.stringify(formValue) === JSON.stringify(this.originalFormValue);
        const isChangedCountry = this.selectedCountryIdsToCompare.every((value, index) => value === this.selectedCountryIds[index]);
        const isChangedCategory = this.selectedCategoryIdsToCompare.every((value, index) => value === this.selectedCategoryIds[index]);
      if (!isChanged || !isChangedCountry || !isChangedCategory) {
        this.movieService
          .UpdateMovieById(movieId, this.addMovieForm.value)
          .pipe(takeUntil(this.destroy$))
          .subscribe(() => {
            this.triggerToggleModalEditMovie();
            this.toastr.success('Cập nhật phim thành công!', 'Thông Báo');
          });
      } else {
        this.triggerToggleModalEditMovie();
        this.toastr.error(
          'Cập nhật phim thất bại. Không có thay đổi.',
          'Thông Báo'
        );
      }
    } else {
      this.addMovieForm.markAllAsTouched();
      // Hiển thị thông báo lỗi hoặc xử lý
    }
  }
  onCheckboxChangeCountry(event: any, countryId: number, countryName: string) {
    if (event.target.checked) {
      if (countryId) {
        this.selectedCountryIds.push(countryId);
      }
      if (countryName) {
        this.selectedCountryNames.push(countryName);
      }
    } else {
      if (countryId) {
        const index = this.selectedCountryIds.indexOf(countryId);
        if (index > -1) {
          this.selectedCountryIds.splice(index, 1);
        }
      }
      if (countryName) {
        const index = this.selectedCountryNames.indexOf(countryName);
        if (index > -1) {
          this.selectedCountryNames.splice(index, 1);
        }
      }
    }
    this.addMovieForm.patchValue({ Country_ids: this.selectedCountryIds });
  }
  onCheckboxChangeCategory(
    event: any,
    categoryId: number,
    categoryName: string
  ) {
    if (event.target.checked) {
      if (categoryId) {
        this.selectedCategoryIds.push(categoryId);
      }
      if (categoryName) {
        this.selectedCategoryNames.push(categoryName);
      }
    } else {
      if (categoryId) {
        const index = this.selectedCategoryIds.indexOf(categoryId);
        if (index > -1) {
          this.selectedCategoryIds.splice(index, 1);
        }
      }
      if (categoryName) {
        const index = this.selectedCategoryNames.indexOf(categoryName);
        if (index > -1) {
          this.selectedCategoryNames.splice(index, 1);
        }
      }
    }
    this.addMovieForm.patchValue({ Category_ids: this.selectedCategoryIds });
  }

  handleGetAllLang() {
    this.langs$
      .pipe(
        takeUntil(this.destroy$), // Hủy subscription khi component bị hủy
        take(1), // Lấy giá trị đầu tiên và hoàn thành
        tap((lang) => {
          if (!lang) {
            this.store.dispatch(LangActions.GetAllLangStart()); // Gọi hàm lấy danh sách category từ API
          }
        })
      )
      .subscribe(); // Không cần xử lý dữ liệu ở đây
  }
  handleGetAllYearRelease() {
    this.yearReleases$
      .pipe(
        takeUntil(this.destroy$), // Hủy subscription khi component bị hủy
        take(1), // Lấy giá trị đầu tiên và hoàn thành
        tap((yearRelease) => {
          if (!yearRelease) {
            this.store.dispatch(YearReleaseActions.GetAllYearReleaseStart()); // Gọi hàm lấy danh sách category từ API
          }
        })
      )
      .subscribe(); // Không cần xử lý dữ liệu ở đây
  }
  handleGetAllGenre() {
    this.genres$
      .pipe(
        takeUntil(this.destroy$), // Hủy subscription khi component bị hủy
        take(1), // Lấy giá trị đầu tiên và hoàn thành
        tap((genre) => {
          if (!genre) {
            this.store.dispatch(GenreActions.GetAllGenreStart()); // Gọi hàm lấy danh sách category từ API
          }
        })
      )
      .subscribe(); // Không cần xử lý dữ liệu ở đây
  }
  handleGetAllCategory() {
    this.categories$
      .pipe(
        takeUntil(this.destroy$), // Hủy subscription khi component bị hủy
        take(1), // Lấy giá trị đầu tiên và hoàn thành
        tap((categories) => {
          if (!categories) {
            this.store.dispatch(CategoryActions.GetAllCategoryStart()); // Gọi hàm lấy danh sách category từ API
          }
        })
      )
      .subscribe(); // Không cần xử lý dữ liệu ở đây
  }
  handleGetAllCountry() {
    this.countries$
      .pipe(
        takeUntil(this.destroy$), // Hủy subscription khi component bị hủy
        take(1), // Lấy giá trị đầu tiên và hoàn thành
        tap((countries) => {
          if (!countries) {
            this.store.dispatch(CountryActions.GetAllCountryStart()); // Gọi hàm lấy danh sách category từ API
          }
        })
      )
      .subscribe(); // Không cần xử lý dữ liệu ở đây
  }
  handleGetAllStatus() {
    this.status$
      .pipe(
        takeUntil(this.destroy$), // Hủy subscription khi component bị hủy
        take(1), // Lấy giá trị đầu tiên và hoàn thành
        tap((status) => {
          if (!status) {
            this.store.dispatch(StatusActions.GetAllStatusesStart()); // Gọi hàm lấy danh sách category từ API
          }
        })
      )
      .subscribe(); // Không cần xử lý dữ liệu ở đây
  }

  ngOnDestroy(): void {
    this.destroy$.next(); // Phát ra giá trị để hủy tất cả các đăng ký
    this.destroy$.complete(); // Hoàn tất Subject
  }

  triggerToggleModalEditMovie() {
    this.triggerToggleModalEditMovieEvent.emit(); // Phát ra sự kiện để thông báo component cha
  }
  handleToggleMutilDropdownCategory(): void {
    this.isOpenMuitilSelectDropdownCategories =
      !this.isOpenMuitilSelectDropdownCategories;
  }
  handleToggleMutilDropdownCountry(): void {
    this.isOpenMuitilSelectDropdownCountries =
      !this.isOpenMuitilSelectDropdownCountries;
  }
  handleOpenMutilDropdownCategory(): void {
    this.isOpenMuitilSelectDropdownCategories = false;
  }
  handleOpenMutilDropdownCountry(): void {
    this.isOpenMuitilSelectDropdownCountries = false;
  }
}
