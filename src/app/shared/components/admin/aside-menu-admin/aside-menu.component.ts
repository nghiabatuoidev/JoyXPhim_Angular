import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ClickOutsideDirective } from '../../../directives/click-outside.directive';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-aside-menu-admin',
  standalone: true,
  imports: [CommonModule, ClickOutsideDirective, RouterLink],
  templateUrl: `./aside-menu.component.html`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AsideMenuAdminComponent {}
