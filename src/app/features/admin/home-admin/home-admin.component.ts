import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsideMenuAdminComponent } from '../../../shared/components/admin/aside-menu-admin/aside-menu.component';
import { HeaderAdminComponent } from '../../../shared/components/admin/header-admin/header-admin.component';
import { FooterAdminComponent } from '../../../shared/components/admin/footer-admin/footer-admin.component';

@Component({
  selector: 'app-home-admin',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    AsideMenuAdminComponent,
    HeaderAdminComponent,
    FooterAdminComponent,
  ],
  templateUrl: `./home-admin.component.html`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeAdminComponent {
}
