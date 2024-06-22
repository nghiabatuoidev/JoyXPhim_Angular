import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-aside-movie-nomination',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: `./aside-movie-nomination.component.html`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AsideMovieNominationComponent { }
