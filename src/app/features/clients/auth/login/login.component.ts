import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { BreadcrumbsComponent } from '../../../../shared/components/client/breadcrumbs/breadcrumbs.component';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    BreadcrumbsComponent
  ],
  templateUrl: `./login.component.html`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent { }
