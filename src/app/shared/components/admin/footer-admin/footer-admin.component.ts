import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-footer-admin',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: `./footer-admin.component.html`,

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterAdminComponent { }
