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
  isToggleMenu: boolean = true;
  ngOnInit(): void {
  }
  // Đảm bảo menu được đóng khi component khởi tạo
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    const windowWidth = (event.target as Window).innerWidth;
    if (windowWidth <= 1024) {
      this.isToggleMenu = false;
    }else {
      this.isToggleMenu = true;
    }
  }
  // Hàm đóng menu
}
