import { Component } from '@angular/core';

@Component({
  selector: 'app-sale-item',
  imports: [],
  templateUrl: './sale-item.component.html',
  styleUrl: './sale-item.component.scss',
})
export class SaleItemComponent {
  Products = [
    {
      title: 'CATCH BIG <strong>DEALS</strong> ON THE CAMERAS',
      buy: 'Shop now',
      image:
        'https://electro.madrasthemes.com/wp-content/uploads/2021/03/cameras-resized.png',
    },
    {
      title: 'TABLETS, SMARTPHONES <strong>AND MORE</strong>',
      buy: 'UPTO <strong>70%</strong> ',
      image:
        'https://electro.madrasthemes.com/wp-content/uploads/2021/03/laptop.png',
    },
    {
      title: 'SHOP THE <strong>HOTTEST</strong> PRODUCTS',
      buy: 'Shop now',
      image:
        'https://electro.madrasthemes.com/wp-content/uploads/2021/03/desktop.png',
    },
    {
      title: 'SHOP THE <strong>HOTTEST</strong> PRODUCTS',
      buy: 'Shop now',
      image:
        'https://electro.madrasthemes.com/wp-content/uploads/2018/10/360-camers.png',
    },
  ];
}
