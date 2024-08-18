import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { EpisodeService } from '../../../../../../core/services/episode.service';
import { ToastrService } from 'ngx-toastr';
import { select, Store } from '@ngrx/store';
import { Observable, Subject, takeUntil } from 'rxjs';
import { selectEpisode } from '../../../../../../core/store/episode/episode.selector';
import * as episodeActions from '../../../../../../core/store/episode/episode.action';
import { ManageEpisodesComponent } from '../../../../../../features/admin/manage-episodes/manage-episodes.component';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-modal-edit-episode',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: `./modal-edit-episode.component.html`,

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalEditEpisodeComponent {
  isOpenModalDelete: boolean = false;
  @Output() triggerToggleModalEditEpisodeEvent = new EventEmitter<void>();
  @ViewChild(ManageEpisodesComponent) parentComponent!: ManageEpisodesComponent;

  formEditEpisode: FormGroup;
  episode$: Observable<any>;
  movieId: number = 0;
  private originalFormValue: any;
  private destroy$ = new Subject<void>();
  constructor(
    private store: Store,
    private fb: FormBuilder,
    private episodeService: EpisodeService,
    private toastr: ToastrService
  ) {
    this.formEditEpisode = this.fb.group({
      Name: ['', [Validators.required]],
      Slug: ['', Validators.required],
      EpisodeName: ['', [Validators.required]],
      LinkEmbed_1: ['', Validators.required],
      LinkEmbed_2: [''],
    });

    this.episode$ = this.store.pipe(select(selectEpisode));
  }
  ngOnInit(): void {
    initFlowbite();
    this.handleGetEpisode();
    //get movieId
    this.episode$
      .pipe(takeUntil(this.destroy$))
      .subscribe((episode) => {
        if (episode?.data !== null) {
          this.movieId = episode?.data?.movieId;
        }
      });
  }
  ngOnDestroy(): void {
    this.destroy$.next(); // Phát ra giá trị để hủy tất cả các đăng ký
    this.destroy$.complete(); // Hoàn tất Subject
  }
  onSubmitEditEpisode(episodeId: number): void {
    if (this.formEditEpisode.valid) {
      if (episodeId != null) {
         // So sánh giá trị mới với giá trị cũ
      const isChanged =
      JSON.stringify(this.formEditEpisode.value) === JSON.stringify(this.originalFormValue);
        if(!isChanged) {
          this.episodeService
          .UpdateEpisodeById(episodeId, this.formEditEpisode.value)
          .pipe(takeUntil(this.destroy$))
          .subscribe((response) => {
            if (response.code == 0) {
              this.showSuccess('Update episode sucess!', 'Thông báo');
              this.triggerToggleModalEditEpisode();
              this.handleGetAllEpisode(this.movieId); // Lấy danh sách phim để update lại danh sách phim trong component cha
            } else {
              this.toastr.error('Update episode failed!', 'Thông báo');
            }
          });
        }else {
          this.toastr.error('Update episode failed! No changed Input', 'Thông báo');
        }
      }
    } else {
      this.formEditEpisode.markAllAsTouched();
    }
  }
  handleGetAllEpisode(movieId: number): void {
    movieId = this.movieId;
    this.store.dispatch(episodeActions.GetAllEpisodeStart({ movieId }));
  }
  handleDeleteEpisode(episodeId: number | null): void {
    if(episodeId != null) {
      this.episodeService.RemoveEpisodeById(episodeId).pipe(takeUntil(this.destroy$)).subscribe(() => {
        this.triggerToggleModalEditEpisode();
        this.handleGetAllEpisode(this.movieId);
        this.toastr.success("Remove episode success!", "Thông Báo");
      });
    }
  }
  handleGetEpisode(): void {
    this.episode$.pipe(takeUntil(this.destroy$)).subscribe((episode) => {
      if (episode?.data != null) {
        this.formEditEpisode.patchValue({
          // Cập nhật các giá trị trong form
          Name: episode?.data?.name,
          Slug: episode?.data?.slug,
          EpisodeName: episode?.data?.episodeName,
          LinkEmbed_1: episode?.data?.linkEpisodes[0]?.linkEmbed,
          LinkEmbed_2: episode?.data?.linkEpisodes[1]?.linkEmbed,
        });
        this.originalFormValue = { ...this.formEditEpisode.value };
      }
    });
  }

  showSuccess(message: string, title: string): any {
    this.toastr.success(message, title);
  }
  handleToggleModeDelete(): void {
    this.isOpenModalDelete = !this.isOpenModalDelete;

  }
  triggerToggleModalEditEpisode() {
    this.triggerToggleModalEditEpisodeEvent.emit(); // Phát ra sự kiện để thông báo component cha
  }
}
