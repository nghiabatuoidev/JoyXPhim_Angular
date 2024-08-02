import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BreadcrumbsComponent } from '../../../shared/components/client/breadcrumbs/breadcrumbs.component';
import { AsideMovieNominationComponent } from '../../../shared/components/client/aside-movie-nomination/aside-movie-nomination.component';
import { AsideMovieTrailerComponent } from '../../../shared/components/client/aside-movie-trailer/aside-movie-trailer.component';

@Component({
  selector: 'app-phim',
  standalone: true,
  imports: [
    CommonModule,
    BreadcrumbsComponent,
    AsideMovieNominationComponent,
    AsideMovieTrailerComponent,
  ],
  templateUrl: `./phim.component.html`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhimComponent {
  selectedTab: string = '';
  listFilm: any = [
    {
      episodes: ['Tập 1', 'Tập 2', 'Tập 3'],
      description:
        'kể về Plaifon (Natapohn Tameeruks thủ vai), cô làm việc như một nhân viên xã hội cho trẻ em và phụ nữ. Cô gặp một cậu bé tên là Mawin. Mawin và mẹ của cậu đang chạy trốn  khỏi người cha bạo hành và hy vọng tìm được nơi trú ẩn tại  tổ chức nơi Plaifon làm việc. Khi mẹ của Mawin đột ngột qua đời, thế giới của cậu như tan vỡ và Plaifon trở thành  chỗ dựa duy nhất trong cuộc đời cậu. Plaifon biết rằng tình yêu có thể cho đi và lấy đi tất cả từ một người, để  lại một vết thương dài đầy tiếc nuối. Cô quyết định rời xa Mawin để tránh những sai lầm không mong muốn. Liệu đường đời của họ có giao nhau lần nữa? Họ có thể bao giờ buông bỏ quá khứ không?',
      actors: ['actor1, actor 2'],
    },
  ];
  ngOnInit(): void {
    this.selectedTab = 'episodeList';
  }
  handleSelectab = (selectedTab: string) => {
    this.selectedTab = selectedTab;
  };
}
