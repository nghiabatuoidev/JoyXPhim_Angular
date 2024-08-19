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
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ClickOutsideDirective } from '../../../../../directives/click-outside.directive';
import { MovieService } from '../../../../../../core/services/movie.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-modal-add-movie',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ClickOutsideDirective],
  templateUrl: `./modal-add-movie.component.html`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalAddMovieComponent {
  @Output() triggerToggleModalAddMovieEvent = new EventEmitter<void>();
  isOpenMuitilSelectDropdownCategories: boolean = false;
  isOpenMuitilSelectDropdownCountries: boolean = false;
  private destroy$ = new Subject<void>();
  categories$: Observable<any>;
  countries$: Observable<any>;
  status$: Observable<any>;
  genres$: Observable<any>;
  yearReleases$: Observable<any>;
  langs$: Observable<any>;
  addMovieForm: FormGroup;
  selectedCategoryIds: number[] = [];
  selectedCountryIds: number[] = [];
  selectedCategoryNames: string[] = [];
  selectedCountryNames: string[] = [];

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
      EpisodeTotal:['', [ Validators.pattern(/^[0-9]+$/)]],
      TypeId: ['', Validators.required],
      StatusId: ['', Validators.required],
      YearReleaseId: ['', Validators.required],
      Category_ids: [[], Validators.required],
      Country_ids: [[], Validators.required],
      MovieTime: [null],
      Quality: ['', Validators.required],
      LangId: ['', Validators.required],
      TrailerUrl: [null],
      DirectorName: [null],
      ActorName: [null],
      IsSubDocquyen: [false],
      IsChieurap: [false],
      IsTrending: [false],
      MovieContent: [null],
    });

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
  }
  ngOnDestroy(): void {
    this.destroy$.next(); // Phát ra giá trị để hủy tất cả các đăng ký
    this.destroy$.complete(); // Hoàn tất Subject
  }
  onSubmit(): void {
    if (this.addMovieForm.valid) {
      this.movieService
        .CreateMovie(this.addMovieForm.value)
        .pipe(takeUntil(this.destroy$))
        .subscribe(() => {
          this.triggerToggleModalAddMovie();
          this.toastr.success('Thêm phim thành công!','Thông Báo');
        });
    } else {
      this.addMovieForm.markAllAsTouched();
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

 

  triggerToggleModalAddMovie() {
    this.triggerToggleModalAddMovieEvent.emit(); // Phát ra sự kiện để thông báo component cha
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
