import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MovieExistGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const type = route.paramMap.get('type');
    // Kiểm tra sự tồn tại của phim
    if (this.movieExists(type)) {
      return true;
    } else {
      // Điều hướng tới trang "Not Found" nếu phim không tồn tại
      this.router.navigate(['/not-found']);
      return false;
    }
  }

  movieExists(type: string | null): boolean {
    // Thực hiện logic để kiểm tra sự tồn tại của phim
    // Ví dụ: Kiểm tra trong danh sách các loại phim hợp lệ
    const validMovies = ['moi', 'le', 'bo'];
    return type !== null && validMovies.includes(type);
  }
}
