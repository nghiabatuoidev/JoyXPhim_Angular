import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-movies-hot',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>movies-hot works!</p>`,
  styleUrl: './movies-hot.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoviesHotComponent { }
