import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule],
  templateUrl: `./home.component.html`,
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  // Class Properties
  currentSlideIndex: number = 0;
  selectedTab: string = 'series';
  slides: any = [
    { img: 'https://image.motchilltv.to/motchill/mac-vu-van-gian-x350.webp' },
    {
      img: 'https://image.motchilltv.to/avatar/ho-yeu-tieu-hong-nuong-nguyet-hong-thien-x350.webp',
    },
    {
      img: 'https://image.motchilltv.to/motchill/cau-chuyen-cua-hoa-hong-x350.webp',
    },
    {
      img: 'https://image.motchilltv.to/motchill/khanh-du-nien-phan-2-x350.webp',
    },
    { img: 'https://image.motchilltv.to/motchill/hierarchy-x350.webp' },
    { img: 'https://image.motchilltv.to/motchill/hierarchy-x350.webp' },
    { img: 'https://image.motchilltv.to/motchill/hierarchy-x350.webp' },
    { img: 'https://image.motchilltv.to/motchill/hierarchy-x350.webp' },
    { img: 'https://image.motchilltv.to/motchill/hierarchy-x350.webp' },
    { img: 'https://image.motchilltv.to/motchill/hierarchy-x350.webp' },
  ];

  singleMovies: any = [
    {
      imgUrl: 'https://image.motchilltv.to/motchill/mac-vu-van-gian-x350.webp',
      nameVi: 'Khánh Dư Niên',
      nameEn: 'abc',
      episode: 'tập 3 Vietsub',
    },
    {
      imgUrl: 'https://image.motchilltv.to/motchill/mac-vu-van-gian-x350.webp',
      nameVi: 'Khánh Dư Niên',
      nameEn: 'abc',
      episode: 'tập 3 Vietsub',
    },
    {
      imgUrl: 'https://image.motchilltv.to/motchill/mac-vu-van-gian-x350.webp',
      nameVi: 'Khánh Dư Niên',
      nameEn: 'abc',
      episode: 'tập 3 Vietsub',
    },
    {
      imgUrl: 'https://image.motchilltv.to/motchill/mac-vu-van-gian-x350.webp',
      nameVi: 'Khánh Dư Niên',
      nameEn: 'abc',
      episode: 'tập 3 Vietsub',
    },
    {
      imgUrl: 'https://image.motchilltv.to/motchill/mac-vu-van-gian-x350.webp',
      nameVi: 'Khánh Dư Niên',
      nameEn: 'abc',
      episode: 'tập 3 Vietsub',
    },
    {
      imgUrl: 'https://image.motchilltv.to/motchill/mac-vu-van-gian-x350.webp',
      nameVi: 'Khánh Dư Niên',
      nameEn: 'abc',
      episode: 'tập 3 Vietsub',
    },
    {
      imgUrl: 'https://image.motchilltv.to/motchill/mac-vu-van-gian-x350.webp',
      nameVi: 'Khánh Dư Niên',
      nameEn: 'abc',
      episode: 'tập 3 Vietsub',
    },
    {
      imgUrl: 'https://image.motchilltv.to/motchill/mac-vu-van-gian-x350.webp',
      nameVi: 'Khánh Dư Niên',
      nameEn: 'abc',
      episode: 'tập 3 Vietsub',
    },
    {
      imgUrl: 'https://image.motchilltv.to/motchill/mac-vu-van-gian-x350.webp',
      nameVi: 'Khánh Dư Niên',
      nameEn: 'abc',
      episode: 'tập 3 Vietsub',
    },
    {
      imgUrl: 'https://image.motchilltv.to/motchill/mac-vu-van-gian-x350.webp',
      nameVi: 'Khánh Dư Niên',
      nameEn: 'abc',
      episode: 'tập 3 Vietsub',
    },
    {
      imgUrl: 'https://image.motchilltv.to/motchill/mac-vu-van-gian-x350.webp',
      nameVi: 'Khánh Dư Niên',
      nameEn: 'abc',
      episode: 'tập 3 Vietsub',
    },
    {
      imgUrl: 'https://image.motchilltv.to/motchill/mac-vu-van-gian-x350.webp',
      nameVi: 'Khánh Dư Niên',
      nameEn: 'abc',
      episode: 'tập 3 Vietsub',
    },
  ];

  seriesMovies: any = [
    {
      imgUrl:
        'https://image.motchilltv.to/avatar/ho-yeu-tieu-hong-nuong-nguyet-hong-thien-x350.webp',
      nameVi: 'Mất dạy',
      nameEn: 'thì cúc',
      episode: 'tập 3 Vietsub',
    },
    {
      imgUrl:
        'https://image.motchilltv.to/avatar/ho-yeu-tieu-hong-nuong-nguyet-hong-thien-x350.webp',
      nameVi: 'Mất dạy',
      nameEn: 'thì cúc',
      episode: 'tập 3 Vietsub',
    },
    {
      imgUrl:
        'https://image.motchilltv.to/avatar/ho-yeu-tieu-hong-nuong-nguyet-hong-thien-x350.webp',
      nameVi: 'Mất dạy',
      nameEn: 'thì cúc',
      episode: 'tập 3 Vietsub',
    },
    {
      imgUrl:
        'https://image.motchilltv.to/avatar/ho-yeu-tieu-hong-nuong-nguyet-hong-thien-x350.webp',
      nameVi: 'Mất dạy',
      nameEn: 'thì cúc',
      episode: 'tập 3 Vietsub',
    },
    {
      imgUrl:
        'https://image.motchilltv.to/avatar/ho-yeu-tieu-hong-nuong-nguyet-hong-thien-x350.webp',
      nameVi: 'Mất dạy',
      nameEn: 'thì cúc',
      episode: 'tập 3 Vietsub',
    },
    {
      imgUrl:
        'https://image.motchilltv.to/avatar/ho-yeu-tieu-hong-nuong-nguyet-hong-thien-x350.webp',
      nameVi: 'Mất dạy',
      nameEn: 'thì cúc',
      episode: 'tập 3 Vietsub',
    },
    {
      imgUrl:
        'https://image.motchilltv.to/avatar/ho-yeu-tieu-hong-nuong-nguyet-hong-thien-x350.webp',
      nameVi: 'Mất dạy',
      nameEn: 'thì cúc',
      episode: 'tập 3 Vietsub',
    },
    {
      imgUrl:
        'https://image.motchilltv.to/avatar/ho-yeu-tieu-hong-nuong-nguyet-hong-thien-x350.webp',
      nameVi: 'Mất dạy',
      nameEn: 'thì cúc',
      episode: 'tập 3 Vietsub',
    },
    {
      imgUrl:
        'https://image.motchilltv.to/avatar/ho-yeu-tieu-hong-nuong-nguyet-hong-thien-x350.webp',
      nameVi: 'Mất dạy',
      nameEn: 'thì cúc',
      episode: 'tập 3 Vietsub',
    },
    {
      imgUrl:
        'https://image.motchilltv.to/avatar/ho-yeu-tieu-hong-nuong-nguyet-hong-thien-x350.webp',
      nameVi: 'Mất dạy',
      nameEn: 'thì cúc',
      episode: 'tập 3 Vietsub',
    },
    {
      imgUrl:
        'https://image.motchilltv.to/avatar/ho-yeu-tieu-hong-nuong-nguyet-hong-thien-x350.webp',
      nameVi: 'Mất dạy',
      nameEn: 'thì cúc',
      episode: 'tập 3 Vietsub',
    },
    {
      imgUrl:
        'https://image.motchilltv.to/avatar/ho-yeu-tieu-hong-nuong-nguyet-hong-thien-x350.webp',
      nameVi: 'Mất dạy',
      nameEn: 'thì cúc',
      episode: 'tập 3 Vietsub',
    },
  ];

  slideConfig = {
    slidesToShow: 5.1,
    slidesToScroll: 5,
    infinite: false,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: '.prev-arrow',
    nextArrow: '.next-arrow',
  };

  // Constructor
  constructor() {}

  // Lifecycle Hooks
  ngOnInit() {}

  // Component Methods
  slickInit(e: any) {
    console.log('slick initialized');
  }

  breakpoint(e: any) {
    console.log('breakpoint');
  }

  afterChange(e: any) {
    this.currentSlideIndex = e.currentSlide;
    console.log('afterChange' + e.currentSlide);
  }

  beforeChange(e: any) {
    console.log('beforeChange' + e.currentSlide);
  }

  trackByFn(index: any, item: any) {
    return item.img; // unique id corresponding to the item
  }

  //
  selectTab(tab: string) {
    this.selectedTab = tab;
  }
}
