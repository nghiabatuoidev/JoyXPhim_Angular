import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BreadcrumbsComponent } from '../../shared/components/breadcrumbs/breadcrumbs.component';
import { AsideMovieNominationComponent } from '../../shared/components/aside-movie-nomination/aside-movie-nomination.component';
import { AsideMovieTrailerComponent } from '../../shared/components/aside-movie-trailer/aside-movie-trailer.component';
import { initFlowbite } from 'flowbite';
@Component({
  selector: 'app-the-loai',
  standalone: true,
  imports: [
    CommonModule,
    BreadcrumbsComponent,
    AsideMovieNominationComponent,
    AsideMovieTrailerComponent,
  ],
  templateUrl: `./the-loai.component.html`,

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TheLoaiComponent {
  ngOnInit(): void {
    initFlowbite();
  }
}
