import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { LocalStorageService } from './core/services/local-storage.service';
import * as AuthActions from './core/store/auth/auth.action';
import { initFlowbite } from 'flowbite';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private store: Store, private storageService: LocalStorageService) {}
  ngOnInit(): void {
    const authState = this.storageService.getItem('auth');
    if (authState) {
      this.store.dispatch(AuthActions.loginSuccess({ user: authState }));
    }
  }
}
