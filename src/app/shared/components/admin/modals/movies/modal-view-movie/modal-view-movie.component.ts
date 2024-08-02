import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal-view-movie',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-view-movie.component.html',

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalViewMovieComponent {
  @Output() triggerToggleModalViewMovieEvent = new EventEmitter<void>();
  triggerToggleModalViewMovie() {
    this.triggerToggleModalViewMovieEvent.emit(); // Phát ra sự kiện để thông báo component cha
  }
}
