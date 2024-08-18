import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Subject, debounceTime, distinctUntilChanged, filter, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-input-search',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: `./input-search.component.html`,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class InputSearchComponent {
  isLoading: boolean = false;
  searchControl = new FormControl();
  private onDestroy$ = new Subject<void>();

  constructor(private cdr: ChangeDetectorRef) {
    this.searchControl.valueChanges
      .pipe(
        tap((value) => value.trim()),
        //lọc value > 5 kí tự
        filter((value) => value.length >= 5),
        distinctUntilChanged(),
        debounceTime(500),
        tap(() => {
          this.isLoading = true;
          //detectChanges được gọi chủ động để cập nhật lại toàn bộ view hiện tại
          this.cdr.detectChanges(); // Manually trigger change detection
        }),
        takeUntil(this.onDestroy$)
      )
      .subscribe((value) => {
        console.log(value);
        // Handle the debounced input value
        setTimeout(() => {
          this.isLoading = false;
          this.cdr.detectChanges(); // Manually trigger change detection
        }, 300);
      });
  }
  // ngOnDestroy sẽ được gọi khi 1 component sắp bị hủy
  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
