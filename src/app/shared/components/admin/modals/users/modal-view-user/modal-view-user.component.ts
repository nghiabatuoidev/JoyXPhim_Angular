import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-modal-view-user',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>modal-view-user works!</p>`,
  styleUrl: './modal-view-user.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalViewUserComponent { }
