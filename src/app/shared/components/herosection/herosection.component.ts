import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-herosection',
  imports: [CarouselModule, CommonModule],
  templateUrl: './herosection.component.html',
  styleUrl: './herosection.component.scss',
})
export class HerosectionComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 1,
      },
      940: {
        items: 1,
      },
    },
    nav: false,
    autoplay: true,
    autoplayTimeout: 6000,
    autoplayHoverPause: false,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    items: 1,
  };

  products = [
    {
      pretitle: null,
      cls: 'animation1',
      title: 'THE NEW STANDARD ',
      postTitle: 'UNDER FAVORABLE SMARTWATCHES',
      price: '<sup>$</sup>749 <sup>99</sup>',
      image:
        'https://electro.madrasthemes.com/wp-content/uploads/2020/02/smartwatches-resized.png',
    },
    {
      pretitle: 'SHOP TO GET WHAT YOU LOVE',
      title:
        'TIMEPIECES THAT MAKE A STATEMENT UPTO <strong class="font-bold"> 40% OFF</strong>',
      postTitle: null,
      cls: 'animation2',

      price: null,
      image:
        'https://electro.madrasthemes.com/wp-content/uploads/2019/01/Sounddevice.png',
    },
    {
      pretitle: 'SHOP TO GET WHAT YOU LOVE',
      title:
        'TIMEPIECES THAT MAKE A STATEMENT UPTO <strong class="font-bold"> 40% OFF</strong>',
      postTitle: null,
      cls: 'animation3',

      price: null,
      image:
        'https://electro.madrasthemes.com/wp-content/uploads/2019/01/Smartphones.png',
    },
  ];
}
