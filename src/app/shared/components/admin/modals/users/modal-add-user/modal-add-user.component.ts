import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-modal-add-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: `./modal-add-user.component.html`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalAddUserComponent {
  @Output() triggerToggleModalAddUserEvent = new EventEmitter<void>();
  triggerToggleModalAddUser() {
    this.triggerToggleModalAddUserEvent.emit(); // Phát ra sự kiện để thông báo component cha
  }
}
