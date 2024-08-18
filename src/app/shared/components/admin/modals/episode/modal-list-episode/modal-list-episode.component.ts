import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { ModalEditEpisodeComponent } from '../modal-edit-episode/modal-edit-episode.component';
import { CommonModule } from '@angular/common';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as episodeActions from '../../../../../../core/store/episode/episode.action';
import {
  selectAllEpisodes,
  selectEpisode,
} from '../../../../../../core/store/episode/episode.selector';
@Component({
  selector: 'app-modal-list-episode',
  standalone: true,
  imports: [CommonModule, ModalEditEpisodeComponent],
  templateUrl: './modal-list-episode.component.html',
})
export class ModalListEpisodeComponent {
  isOpenModalEditEpisode: boolean = false;
  @Input() serverId!: any;
  @Output() triggerToggleModalListEpisodeEvent = new EventEmitter<void>();
  episodes$: Observable<any>;
  constructor(private store: Store) {
    this.episodes$ = this.store.pipe(select(selectAllEpisodes));
  }
  ngOnInit(): void {}
  handleToggleModalEditEpisode = (): void => {
    this.isOpenModalEditEpisode = !this.isOpenModalEditEpisode;
  };
  handleGetEpisode(episodeId: number): void {
    this.store.dispatch(episodeActions.GetEpisodeStart({episodeId}));
  }
  triggerToggleModalListEpisode() {
    this.triggerToggleModalListEpisodeEvent.emit(); // Phát ra sự kiện để thông báo component cha
  }
}
