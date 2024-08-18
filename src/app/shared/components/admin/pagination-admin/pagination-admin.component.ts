import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagination-admin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: `./pagination-admin.component.html`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationAdminComponent {
  @Input() pageCurrent: number = 1;
  @Input() pageSize: number = 10;
  @Input() totalPages: number = 0;
  @Output() pageChange = new EventEmitter<{ page: number; pageSize: number }>();
  constructor(private router: Router) {}

  get pages(): number[] {
    const totalPages = this.totalPages;
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }
  onPageChange(pageNew: number): void {
    if (pageNew >= 1 && pageNew <= this.totalPages) {
      this.pageCurrent = pageNew;
      this.pageChange.emit({ page: this.pageCurrent, pageSize: this.pageSize }); // Emit the page change event
    }
    window.scrollTo(0, 0);
    // Update URL with new page and pageSize
    this.router.navigate([], {
      queryParams: { page: this.pageCurrent, pageSize: this.pageSize },
      queryParamsHandling: 'merge', // Merge with existing query params
    });
  }
  goToPreviousPage(): void {
    if (this.pageCurrent > 1) {
      this.onPageChange(this.pageCurrent - 1);
    }
  }

  goToNextPage(): void {
    if (this.pageCurrent < this.totalPages) {
      this.onPageChange(this.pageCurrent + 1);
    }
  }
}
