import { Component } from '@angular/core';
import { HorizontalItemComponent } from '../../items/horizontal-item/horizontal-item.component';
// import { CommonModule } from '@angular/common';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-best-sellers',
  imports: [HorizontalItemComponent, CarouselModule],
  templateUrl: './best-sellers.component.html',
  styleUrl: './best-sellers.component.scss',
})
export class BestSellersComponent {
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
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
      576: {
        items: 2,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
    nav: false,
  };
  products = [
    [
      {
        title: 'Game Console Controller + USB 3.0 Cable',
        category: 'Game Consoles, Video Games & Accessories',
        Oprice: 99.0,
        Nprice: 99.0,
        image:
          'https://electro.madrasthemes.com/wp-content/uploads/2016/03/consal-300x300.png',
        feature: 'top rated',
      },
      {
        title: 'Wireless Audio System Multiroom 360',
        category: 'Audio Speakers, TV & Audio',
        Oprice: 2299.0,
        Nprice: 2299.0,
        feature: '',
        image:
          'https://electro.madrasthemes.com/wp-content/uploads/2016/03/WirelessSound-300x300.png',
      },
    ],

    [
      {
        title: 'Universal Headphones Case in Black',
        category: 'Accessories, Headphone Cases',
        Oprice: 159.0,
        Nprice: 159.0,
        image:
          'https://electro.madrasthemes.com/wp-content/uploads/2016/03/headphonecase-300x300.png',
        feature: 'top rated',
      },
      {
        title: 'Tablet White EliteBook Revolve 810 G2',
        category: 'Laptops, Tablets & Computers',
        Oprice: 2299.0,
        Nprice: 2100.0,
        feature: '',
        image:
          'https://electro.madrasthemes.com/wp-content/uploads/2016/03/apptablet-300x300.png',
      },
    ],

    [
      {
        title: 'Tablet Thin EliteBook Revolve 810 G6',
        category: 'Smart Phones & Tablets',
        Oprice: 1300.0,
        Nprice: 1300.0,
        image:
          'https://electro.madrasthemes.com/wp-content/uploads/2016/03/redPhone-300x300.png',
        feature: 'sale',
      },
      {
        title: 'Full Color LaserJet Pro M452dn',
        category: 'Printers, Printers & Ink',
        Oprice: 1050.0,
        Nprice: 1050.0,
        feature: '',
        image:
          'https://electro.madrasthemes.com/wp-content/uploads/2016/03/printer-300x300.png',
      },
    ],
    [
      {
        title: 'White Solo 2 Whireless ',
        category: 'Accessories, Headhones',
        Oprice: 248.99,
        Nprice: 248.99,
        feature: '',
        image:
          'https://electro.madrasthemes.com/wp-content/uploads/2016/03/uniheadphone-300x300.png',
      },
      {
        title: 'Smart Phones 6S 32GB LTE',
        category: 'Smart Phones & Tablets,',
        Oprice: 1215.0,
        Nprice: 1100.0,
        feature: 'page2',
        image:
          'https://electro.madrasthemes.com/wp-content/uploads/2016/03/GoldPhone-1-300x300.png',
      },
    ],
    [
      {
        title: 'Smartphone 6S 32GB ',
        category: 'Bluetooth Speakers,',
        Oprice: 799.0,
        Nprice: 799.0,
        feature: 'page2',
        image:
          'https://electro.madrasthemes.com/wp-content/uploads/2021/11/prodcut3-300x300.png',
      },

      {
        title: 'Purple NX Mini F1 aparat SMART NX',
        category: 'Cameras, Cameras & photograph',
        Oprice: 559.0,
        Nprice: 559.0,
        feature: 'page2',
        image:
          'https://electro.madrasthemes.com/wp-content/uploads/2016/03/camera2-300x300.png',
      },
    ],
    [
      {
        title: 'Tablet White EliteBook Revolve 810 G2',
        category: 'Laptops, Laptops & Computers',
        Oprice: 1300.0,
        Nprice: 1300.0,
        feature: 'page2',
        image:
          'https://electro.madrasthemes.com/wp-content/uploads/2016/03/Ultrabooks-300x300.png',
      },
      {
        title: 'Apple MacBook Pro MF841HN/A 13-inch',
        category: 'Laptops & Computers, Mac',
        Oprice: 1800.0,
        Nprice: 1500.0,
        feature: 'page2',
        image:
          'https://electro.madrasthemes.com/wp-content/uploads/2016/03/macpro-300x300.png',
      },
    ],
    [
      {
        title: 'Notebook White Spire V Nitro VN7-591G',
        category: 'Smart Phones & Tablets',
        Oprice: 2299.0,
        Nprice: 2299.0,
        feature: 'page3',
        image:
          'https://electro.madrasthemes.com/wp-content/uploads/2016/03/GoldPhone-1-300x300.png',
      },

      {
        title: 'Game Console Destiny Special Edition',
        category: 'Game Consoles,Gamming,',
        Oprice: 150.0,
        Nprice: 150.0,
        feature: 'page3',
        image:
          'https://electro.madrasthemes.com/wp-content/uploads/2016/03/game1-300x300.png',
      },
    ],
    [
      {
        title: 'Gear Virtual Reality',
        category: 'Gadgets, Wearables',
        Oprice: 799.0,
        Nprice: 799.0,
        feature: 'page3',
        image:
          'https://electro.madrasthemes.com/wp-content/uploads/2016/03/occlod-300x300.png',
      },
    ],
    [
      {
        title: 'Laptop Screener CX70 2QF-621XPL 17.3"4210',
        category: 'Laptops, Laptops & Computers',
        Oprice: 2399.0,
        Nprice: 2399.0,
        feature: 'page3',
        image:
          'https://electro.madrasthemes.com/wp-content/uploads/2016/03/applap-300x300.png',
      },
    ],
  ];
}
