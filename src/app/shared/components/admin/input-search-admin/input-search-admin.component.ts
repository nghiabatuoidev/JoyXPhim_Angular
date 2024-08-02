import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-input-search-admin',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: `./input-search-admin.component.html`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputSearchAdminComponent { }
