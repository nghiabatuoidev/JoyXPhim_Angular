import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal-edit-movie',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: `./modal-edit-movie.component.html`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalEditMovieComponent { 

  @Output() triggerToggleModalEditMovieEvent = new EventEmitter<void>();
  triggerToggleModalEditMovie() {
    this.triggerToggleModalEditMovieEvent.emit(); // Phát ra sự kiện để thông báo component cha
  }
}
