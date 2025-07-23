import { Component } from '@angular/core';
import { ProductItemComponent } from '../../items/product-item/product-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-best-deal',
  imports: [ProductItemComponent, CommonModule],
  templateUrl: './best-deal.component.html',
  styleUrl: './best-deal.component.scss',
})
export class BestDealComponent {
  getDealWithFeature(_t15: {
    title: string;
    category: string;
    Oprice: number;
    Nprice: number;
    image: string;
  }): import('../../models/productDto.modal').ProductDto | null {
    throw new Error('Method not implemented.');
  }
  products = [
    {
      title: 'Best Deals',
    },
    {
      title: 'TV & Audio',
    },
    {
      title: 'Camera',
    },
    {
      title: 'Audio',
    },
    {
      title: 'Smartphones',
    },
    {
      title: 'GPS & Navi',
    },
    {
      title: 'Computers',
    },
    {
      title: 'Portable Audio',
    },
    {
      title: 'Accessories',
    },
  ];

  deals = [
    {
      title: 'Powerbank 1130 mAh Blue',
      category: 'Accessories, Power Banks',
      Oprice: 210.0,
      Nprice: 200.0,
      image:
        'https://electro.madrasthemes.com/wp-content/uploads/2016/03/powerbank-300x300.png',
      feature: '',
    },
    {
      title: 'Game Consoles, Video Games & Consoles',
      category: 'Game Console Controller + USB 3.0 Cable',
      Oprice: 99.0,
      Nprice: 99.0,
      image:
        'https://electro.madrasthemes.com/wp-content/uploads/2016/03/consal-600x550.png',
      feature: '',
    },
    {
      title: 'Aerocool EN52377 Dead Silence Gaming Cube Case',
      category: 'Aerocool EN52377 Dead Silence Gaming Cube Case',
      Oprice: 100.0,
      Nprice: 150.0,
      image:
        'https://electro.madrasthemes.com/wp-content/uploads/2016/03/gamecabin-300x300.png',
      feature: '',
    },
    {
      title: 'Laptop Screener CX70 2QF-621XPL 17.3″ 4210',
      category: 'Laptops, Laptops & Computers',
      Oprice: 1215.0,
      Nprice: 1100.0,
      image:
        'https://electro.madrasthemes.com/wp-content/uploads/2016/03/applap-300x300.png',
      feature: '',
    },
    {
      title: 'Widescreen 4K SUHD TV',
      category: 'Home Entertainment, TVs',
      Oprice: 559.0,
      Nprice: 559.0,
      image:
        'https://electro.madrasthemes.com/wp-content/uploads/2016/03/widetv-300x300.png',
      feature: '',
    },
  ];
  isActiveTab: string = this.products[0].title;
  isActive(x: string) {
    this.isActiveTab = x;
  }
}
