import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PaginationAdminComponent } from '../../../shared/components/admin/pagination-admin/pagination-admin.component';
import { ModalEditEpisodeComponent } from '../../../shared/components/admin/modals/episode/modal-edit-episode/modal-edit-episode.component';

@Component({
  selector: 'app-manage-episodes',
  standalone: true,
  imports: [
    CommonModule,
    PaginationAdminComponent,
    ModalEditEpisodeComponent
  ],
  templateUrl: `./manage-episodes.component.html`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManageEpisodesComponent { 
  isOpenModalEditEpisode:boolean = false;

  handleToggleModalEditEpisode = ():void => {
    this.isOpenModalEditEpisode = !this.isOpenModalEditEpisode;
  }
}
