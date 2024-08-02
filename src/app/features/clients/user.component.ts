import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import "tw-elements";
import { HeaderComponent } from '../../shared/components/client/header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from '../../shared/components/client/footer/footer.component';

@Component({
  selector: 'app-user-component',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HomeComponent, FooterComponent],
  templateUrl: './user.component.html',
})
export class UsersComponent {
}
