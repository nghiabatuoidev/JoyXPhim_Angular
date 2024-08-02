import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { BreadcrumbsComponent } from '../../../shared/components/client/breadcrumbs/breadcrumbs.component';
import { AsideMovieNominationComponent } from '../../../shared/components/client/aside-movie-nomination/aside-movie-nomination.component';
import { AsideMovieTrailerComponent } from '../../../shared/components/client/aside-movie-trailer/aside-movie-trailer.component';
@Component({
  selector: 'app-list-phim',
  standalone: true,
  imports: [
    CommonModule,
    BreadcrumbsComponent,
    AsideMovieNominationComponent,
    AsideMovieTrailerComponent
  ],
  templateUrl: `./phim-le.component.html`,

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListPhimComponent {
  ngOnInit(): void {
    initFlowbite();
  }
}
