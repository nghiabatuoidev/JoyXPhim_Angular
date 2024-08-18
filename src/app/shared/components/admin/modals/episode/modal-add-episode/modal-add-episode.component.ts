import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { select, Store } from '@ngrx/store';
import { initFlowbite } from 'flowbite';
import { Observable, Subject, take, takeUntil, tap } from 'rxjs';
import { selectStatuses } from '../../../../../../core/store/status/status.selector';
import * as StatusActions from '../../../../../../core/store/status/status.action';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { EpisodeService } from '../../../../../../core/services/episode.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-modal-add-episode',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: `./modal-add-episode.component.html`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalAddEpisodeComponent implements OnInit {
  @Output() triggerToggleModalAddEpisodeEvent = new EventEmitter<void>();
  @Input() movieId!: number;
  formAddEpisode: FormGroup;
  private destroy$ = new Subject<void>();
  constructor(
    private store: Store,
    private fb: FormBuilder,
    private episodeService: EpisodeService,
    private toastr: ToastrService
  ) {
    this.formAddEpisode = this.fb.group({
      Name: ['', [Validators.required]],
      Slug: ['', Validators.required],
      EpisodeName: ['', [Validators.required]],
      LinkEmbed_1: ['', Validators.required],
      LinkEmbed_2: [''],
    });
  }
  ngOnInit(): void {
    initFlowbite();
  }
  ngOnDestroy(): void {
    this.destroy$.next(); // Phát ra giá trị để hủy tất cả các đăng ký
    this.destroy$.complete(); // Hoàn tất Subject
  }
  onSubmit(): void {
    if (this.formAddEpisode.valid) {
      if (this.movieId != null) {
        this.episodeService
          .CreateEpisode(this.movieId, this.formAddEpisode.value)
          .pipe(takeUntil(this.destroy$))
          .subscribe((response) => {
            if (response.code == 0) {
              this.showSuccess('Create episode sucess!', 'Thông báo');
              this.triggerToggleModalAddEpisode();
            } else {
              this.toastr.error('Create episode failed!', 'Thông báo');
            }
          });
      }
    } else {
      this.formAddEpisode.markAllAsTouched();
    }
  }
  showSuccess(message: string, title: string): any {
    this.toastr.success(message, title);
  }
  triggerToggleModalAddEpisode() {
    this.triggerToggleModalAddEpisodeEvent.emit(); // Phát ra sự kiện để thông báo component cha
  }
}
