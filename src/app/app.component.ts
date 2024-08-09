import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { initFlowbite } from 'flowbite';
import { LocalStorageService } from './core/services/local-storage.service';
import * as AuthActions from './core/store/auth/auth.action';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my-app';
 
  constructor(private store: Store, private storageService: LocalStorageService) {}
  ngOnInit(): void {
    initFlowbite();
    const authState = this.storageService.getItem('auth');
    if (authState) {
      this.store.dispatch(AuthActions.loginSuccess({ user: authState }));
    }
    console.log(authState);
  }
}
