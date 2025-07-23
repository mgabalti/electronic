import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-products',
  imports: [CommonModule],
  templateUrl: './footer-products.component.html',
  styleUrl: './footer-products.component.scss',
})
export class FooterProductsComponent {
  [x: string]: any;
  products = [
    {
      title: 'Featured Products',
      item: [
        {
          category: 'Tablet Thin EliteBook Revolve 810 G6',
          rating: ' ',
          oPrice: '$1,300.00',
          nPrice: '$1,300.00',
          img: 'https://electro.madrasthemes.com/wp-content/uploads/2016/03/redPhone-300x300.png',
        },

        {
          category: 'Notebook Widescreen Z51-70 40K6013UPB',
          rating: ' ',
          oPrice: '$1,100.00',
          nPrice: '$1,100.00',
          img: 'https://electro.madrasthemes.com/wp-content/uploads/2016/03/sam2-300x300.png',
        },

        {
          category: 'Smartphone 6S 128GB LTE',
          rating: ' ',
          oPrice: '$780.00',
          nPrice: '$750.00',
          img: 'https://electro.madrasthemes.com/wp-content/uploads/2016/03/lgphone-300x300.png',
        },
      ],
    },

    {
      title: 'Top Selling Products',
      item: [
        {
          category: 'Game Console Controller + USB 3.0 Cable',
          rating: ' ',
          oPrice: '$99.00',
          nPrice: '$99.00',
          img: 'https://electro.madrasthemes.com/wp-content/uploads/2016/03/consal-300x300.png',
        },

        {
          category: 'Universal Headphones Case in Black',
          rating: ' ',
          oPrice: '$159.00',
          nPrice: '$159.00',
          img: 'https://electro.madrasthemes.com/wp-content/uploads/2016/03/headphonecase-300x300.png',
        },

        {
          category: 'Tablet Thin EliteBook Revolve 810 G6',
          rating: ' ',
          oPrice: '$1,300.00',
          nPrice: '$1,300.00',
          img: 'https://electro.madrasthemes.com/wp-content/uploads/2016/03/redPhone-300x300.png',
        },
      ],
    },

    {
      title: 'On-sale Products',
      item: [
        {
          category: 'Notebook Black Spire V Nitro VN7-591G',
          rating: ' ',
          oPrice: '$2,299.00',
          nPrice: '$1,999.00',
          img: 'https://electro.madrasthemes.com/wp-content/uploads/2016/03/GoldPhone-300x300.png',
        },

        {
          category: 'Aerocool EN52377 Dead Silence Gaming Cube Case',
          rating: ' ',
          oPrice: '$180.00',
          nPrice: '$150.00',
          img: 'https://electro.madrasthemes.com/wp-content/uploads/2016/03/gamecabin-300x300.png',
        },

        {
          category: 'Ultrabook UX305CA-FC050T',
          rating: ' ',
          oPrice: '$1,218.00',
          nPrice: '$1,200.00',
          img: 'https://electro.madrasthemes.com/wp-content/uploads/2016/03/redmi-300x300.png',
        },
      ],
    },
  ];

  menu = [
    {
      title: 'We Recommend',
      links: [
        'Home v1',
        'Home v2',
        'Home v3',
        'Home v3.1',
        'Home v4',
        'Home v5',
        'Home v6',
        'Home v7',
        'Home v8',
        'Home v9',
      ],
      expanded: false,
    },
    {
      title: 'My Account',
      links: ['About', 'Contact v1', 'Contact v2', 'FAQ'],
      expanded: false,
    },
    {
      title: 'Customer Care',
      links: [
        'My Account',
        'Track Your Order',
        'Customer Service',
        'Returns/Exchange',
        'FAQs',
        'Product Support',
      ],
      expanded: false,
    },
    {
      title: 'About Us',
      links: ['Blog Single', 'Store Directory', 'Wishlist', 'Compare'],
      expanded: false,
    },
  ];

  activeIndex: number | null = null;
  toggle(index: number) {
  this.activeIndex = this.activeIndex === index ? null : index;
  }
}
