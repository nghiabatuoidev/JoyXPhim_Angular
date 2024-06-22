import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Ripple, Collapse, Dropdown, initTWE } from 'tw-elements';
import { ClickOutsideDirective } from '../../directives/click-outside.directive';
import { InputSearchComponent } from '../input-search/input-search.component';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    ClickOutsideDirective,
    InputSearchComponent,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: `./header.component.html`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  isOpenMenu: boolean = false;
  isOpenType: boolean = false;
  isOpenCountry: boolean = false;
  isOpenInput: boolean = false;
  ngOnInit() {
    initTWE({ Dropdown, Ripple, Collapse });
  }
  //menu
  toggleDropdown(): any {
    this.isOpenMenu = !this.isOpenMenu;
  }
  closeDropdown(): any {
    this.isOpenMenu = false;
  }
  //type
  toggleType(): any {
    this.isOpenType = !this.isOpenType;
  }
  //Country
  toggleCountry(): any {
    this.isOpenCountry = !this.isOpenCountry;
  }
  //Input Search
  toogleInput(): any {
    this.isOpenInput = !this.isOpenInput;
  }
}
