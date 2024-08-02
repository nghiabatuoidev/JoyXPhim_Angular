import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal-add-movie',
  standalone: true,
  imports: [CommonModule],
  templateUrl: `./modal-add-movie.component.html`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalAddMovieComponent {
  @Output() triggerToggleModalAddMovieEvent = new EventEmitter<void>();
  triggerToggleModalAddMovie() {
    this.triggerToggleModalAddMovieEvent.emit(); // Phát ra sự kiện để thông báo component cha
  }
}
