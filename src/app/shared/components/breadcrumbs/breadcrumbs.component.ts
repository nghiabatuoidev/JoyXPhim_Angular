import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-breadcrumbs',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: `./breadcrumbs.component.html`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbsComponent { }
