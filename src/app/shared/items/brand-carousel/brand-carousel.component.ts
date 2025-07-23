import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-brand-carousel',
  imports: [CarouselModule],
  templateUrl: './brand-carousel.component.html',
  styleUrl: './brand-carousel.component.scss',
})
export class BrandCarouselComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: [
      '<i class="fa fa-chevron-left"></i>',
      '<i class="fa fa-chevron-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 5,
      },
    },
    nav: true,
  };
}
