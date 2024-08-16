import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { select, Store } from '@ngrx/store';
import { initFlowbite } from 'flowbite';
import { Observable, take, takeUntil, tap } from 'rxjs';
import { selectStatuses } from '../../../../../../core/store/status/status.selector';
import * as StatusActions from '../../../../../../core/store/status/status.action';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-modal-add-episode',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: `./modal-add-episode.component.html`,

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalAddEpisodeComponent implements OnInit {
  @Output() triggerToggleModalAddEpisodeEvent = new EventEmitter<void>();
  status$: Observable<any>;
  destroy$: any;
  addMovieForm: FormGroup;
  constructor(private store: Store, private fb: FormBuilder) {
    this.addMovieForm = this.fb.group({
      MovieName: ['', [Validators.required]],
      MovieOriginName: ['', [Validators.required]],
      Slug: ['', Validators.required],
    });
    this.status$ = this.store.pipe(select(selectStatuses));
  }
  ngOnInit(): void {
    initFlowbite();
  }
  ngOnDestroy(): void {
    this.destroy$.next(); // Phát ra giá trị để hủy tất cả các đăng ký
    this.destroy$.complete(); // Hoàn tất Subject
  }
  handleGetAllStatus() {
    this.status$
      .pipe(
        takeUntil(this.destroy$), // Hủy subscription khi component bị hủy
        take(1), // Lấy giá trị đầu tiên và hoàn thành
        tap((status: any) => {
          if (!status) {
            this.store.dispatch(StatusActions.GetAllStatusesStart()); // Gọi hàm lấy danh sách category từ API
          }
        })
      )
      .subscribe(); // Không cần xử lý dữ liệu ở đây
  }
  triggerToggleModalAddEpisode() {
    this.triggerToggleModalAddEpisodeEvent.emit(); // Phát ra sự kiện để thông báo component cha
  }
}
