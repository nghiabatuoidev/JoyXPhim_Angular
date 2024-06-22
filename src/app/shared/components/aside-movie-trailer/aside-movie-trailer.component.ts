import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-aside-movie-trailer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aside-movie-trailer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AsideMovieTrailerComponent {}
