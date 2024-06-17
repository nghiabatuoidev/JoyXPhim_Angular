import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: `./input-search.component.html`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputSearchComponent {
  searchTerm: string = '';
  // Hàm xử lý khi người dùng nhập từ khoá tìm kiếm
  onSearch() {
    // Thực hiện tìm kiếm dựa trên từ khoá searchTerm
    if (this.searchTerm.trim() !== '') {
      console.log(this.searchTerm);
    } else {
    }
  }
}
