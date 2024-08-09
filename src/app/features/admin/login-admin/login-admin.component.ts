import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as AuthActions from '../../../core/store/auth/auth.action';

@Component({
  selector: 'app-login-admin',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: `./login-admin.component.html`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginAdminComponent {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private store: Store) {
    this.loginForm = this.fb.group({
      email: [
        '',
        [Validators.required, Validators.email, Validators.maxLength],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(100),
        ],
      ],
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      const { email, password } = this.loginForm.value;
      this.store.dispatch(
        AuthActions.login({ email: email, password: password })
      );
    } else {
      console.error('Form is invalid');
    }
  }
}
