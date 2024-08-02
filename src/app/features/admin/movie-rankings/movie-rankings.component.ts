import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-movie-rankings',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>movie-rankings works!</p>`,
  styleUrl: './movie-rankings.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieRankingsComponent { }
