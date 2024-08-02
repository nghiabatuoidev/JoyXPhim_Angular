import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-search-tool-admin',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: `./search-tool.component.html`,

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchToolAdminComponent { }
