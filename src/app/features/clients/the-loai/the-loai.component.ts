import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { initFlowbite } from 'flowbite';
import { BreadcrumbsComponent } from '../../../shared/components/client/breadcrumbs/breadcrumbs.component';
import { AsideMovieNominationComponent } from '../../../shared/components/client/aside-movie-nomination/aside-movie-nomination.component';
import { AsideMovieTrailerComponent } from '../../../shared/components/client/aside-movie-trailer/aside-movie-trailer.component';
@Component({
  selector: 'app-the-loai',
  standalone: true,
  imports: [
    CommonModule,
    BreadcrumbsComponent,
    AsideMovieNominationComponent,
    AsideMovieTrailerComponent
  ],
  templateUrl: `./the-loai.component.html`,

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TheLoaiComponent {
  ngOnInit(): void {
    initFlowbite();
  }
}
