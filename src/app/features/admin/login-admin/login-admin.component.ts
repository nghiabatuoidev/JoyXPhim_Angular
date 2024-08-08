import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; 
import { AuthService } from '../../../core/services/auth.service';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-login-admin',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthService], 
  templateUrl: `./login-admin.component.html`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginAdminComponent {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email, Validators.maxLength]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(100)]],
    });
  }
 
  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      const { email, password } = this.loginForm.value;
      this.authService.login(email, password).subscribe({
        next: response => {
          // Xử lý thành công đăng nhập
          console.log('Login successful', response);
          // Chuyển hướng đến trang khác hoặc hiển thị thông báo thành công
        },
        error: err => {
          // Xử lý lỗi đăng nhập
          console.error('Login failed', err);
          // Hiển thị thông báo lỗi cho người dùng
        }
      });
    } else {
      console.error('Form is invalid');
    }
  }
 }
