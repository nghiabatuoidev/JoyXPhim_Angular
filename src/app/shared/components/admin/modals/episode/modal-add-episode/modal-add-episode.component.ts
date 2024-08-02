import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal-add-episode',
  standalone: true,
  imports: [CommonModule],
  templateUrl: `./modal-add-episode.component.html`,

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalAddEpisodeComponent {
  @Output() triggerToggleModalAddEpisodeEvent = new EventEmitter<void>();
  triggerToggleModalAddEpisode() {
    this.triggerToggleModalAddEpisodeEvent.emit(); // Phát ra sự kiện để thông báo component cha
  }
}
