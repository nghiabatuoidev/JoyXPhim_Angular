import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SearchToolAdminComponent } from '../../../shared/components/admin/search-tool-admin/search-tool.component';
import { PaginationAdminComponent } from '../../../shared/components/admin/pagination-admin/pagination-admin.component';
import { ModalAddUserComponent } from '../../../shared/components/admin/modals/users/modal-add-user/modal-add-user.component';

@Component({
  selector: 'app-manage-user',
  standalone: true,
  imports: [
    CommonModule,
    SearchToolAdminComponent,
    PaginationAdminComponent,
    ModalAddUserComponent,
  ],
  templateUrl: `./manage-users.component.html`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManageUserComponent {
  isOpenModalAddUser: boolean = false;
  handleToggleModalAddUser: any = () => {
    this.isOpenModalAddUser = !this.isOpenModalAddUser;
  };
}
