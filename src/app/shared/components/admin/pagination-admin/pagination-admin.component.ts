import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-pagination-admin',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: `./pagination-admin.component.html`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationAdminComponent { }
