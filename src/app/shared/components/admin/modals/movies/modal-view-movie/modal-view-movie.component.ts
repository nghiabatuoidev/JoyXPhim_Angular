import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectMovie } from '../../../../../../core/store/movie/movie.selector';

@Component({
  selector: 'app-modal-view-movie',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-view-movie.component.html',

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalViewMovieComponent {
  @Output() triggerToggleModalViewMovieEvent = new EventEmitter<void>();
  movie$: Observable<any>;
  urlImageNotFound : string = "assets/img/not-image.jpg";
  
  constructor(private store: Store) {
    this.movie$ = this.store.pipe(select(selectMovie));
  }
  triggerToggleModalViewMovie() {
    this.triggerToggleModalViewMovieEvent.emit(); // Phát ra sự kiện để thông báo component cha
  }
}
