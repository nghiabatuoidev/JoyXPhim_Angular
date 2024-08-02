import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-login-admin',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: `./login-admin.component.html`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginAdminComponent { }
