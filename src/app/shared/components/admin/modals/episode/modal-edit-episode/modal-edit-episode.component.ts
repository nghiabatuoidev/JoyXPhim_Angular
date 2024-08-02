import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal-edit-episode',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: `./modal-edit-episode.component.html`,

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalEditEpisodeComponent { 
  @Output() triggerToggleModalEditEpisodeEvent = new EventEmitter<void>();
  triggerToggleModalEditEpisode() {
    this.triggerToggleModalEditEpisodeEvent.emit(); // Phát ra sự kiện để thông báo component cha
  }

}
