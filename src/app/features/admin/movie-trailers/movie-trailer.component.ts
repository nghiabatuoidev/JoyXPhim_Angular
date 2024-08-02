import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-movie-trailers',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: `./movie-trailer.component.css`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieTrailersComponent { }
