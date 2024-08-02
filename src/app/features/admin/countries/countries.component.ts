import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-countries',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>countries works!</p>`,
  styleUrl: './countries.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountriesComponent { }
