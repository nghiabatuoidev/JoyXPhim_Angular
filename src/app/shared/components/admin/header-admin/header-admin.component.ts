import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { AsideMenuMobileAdminComponent } from '../aside-menu-mobile-admin/aside-menu-mobile-admincomponent';
import { ClickOutsideDirective } from '../../../directives/click-outside.directive';
import { Store } from '@ngrx/store';
import * as AuthActions from '../../../../core/store/auth/auth.action';
import { initFlowbite } from 'flowbite';
@Component({
  selector: 'app-header-admin',
  standalone: true,
  imports: [CommonModule, ClickOutsideDirective, AsideMenuMobileAdminComponent],
  templateUrl: `./header-admin.component.html`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderAdminComponent implements OnInit {
  isToggleMenu: boolean = false;
  @ViewChild('menu', { static: false }) menuRef!: ElementRef;
  
  constructor(private store: Store) {}
  ngOnInit(): void {
    initFlowbite();
  }

  handleOpenMenu = () : void => {
    this.isToggleMenu = !this.isToggleMenu;
  };
  handleCloseMenu = () : void => {
    this.isToggleMenu = false;
  };

  handleLogout = (): void => {
    this.store.dispatch(AuthActions.logout());
  };
}
