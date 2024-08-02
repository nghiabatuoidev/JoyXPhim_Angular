import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output
} from '@angular/core';
import { ClickOutsideDirective } from '../../../directives/click-outside.directive';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-aside-menu-mobile-admin',
  standalone: true,
  imports: [CommonModule, ClickOutsideDirective, RouterLink],
  templateUrl: `./aside-menu-mobile-admin.component.html`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AsideMenuMobileAdminComponent {
  @Output() toggleOpenMenuEvent = new EventEmitter<void>();
  triggerOpenMenu() {
    this.toggleOpenMenuEvent.emit();
  }
}
