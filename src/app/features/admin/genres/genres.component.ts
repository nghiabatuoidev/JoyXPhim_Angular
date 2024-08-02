import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-genres',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>genres works!</p>`,
  styleUrl: './genres.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GenresComponent { }
