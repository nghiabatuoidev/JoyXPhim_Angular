import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { AsideMenuMobileAdminComponent } from '../aside-menu-mobile-admin/aside-menu-mobile-admincomponent';
import { ClickOutsideDirective } from '../../../directives/click-outside.directive';

@Component({
  selector: 'app-header-admin',
  standalone: true,
  imports: [CommonModule, ClickOutsideDirective,AsideMenuMobileAdminComponent],
  templateUrl: `./header-admin.component.html`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderAdminComponent {
  isToggleMenu: boolean = false;
  @ViewChild('menu', { static: false }) menuRef!: ElementRef; 
  
  ngOnInit(): void {}
  
  handleOpenMenu = () => {
    this.isToggleMenu = !this.isToggleMenu;
  };
  handleCloseMenu = () => {
    this.isToggleMenu = false;
  };
}
