import { Component } from '@angular/core';
import { ProductItemComponent } from '../../items/product-item/product-item.component';
import { CommonModule } from '@angular/common';
import { Product, ProductResponse } from '../../models/productDto.modal';
import { ProductServiceService } from '../../services/product-service.service';

@Component({
  selector: 'app-best-deal',
  imports: [ProductItemComponent, CommonModule],
  templateUrl: './best-deal.component.html',
  styleUrl: './best-deal.component.scss',
})
export class BestDealComponent {
  product: Product[] | null = null;
  data: ProductResponse | null = null;

  constructor(private pservices:ProductServiceService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.pservices.getAllProduct().subscribe((data:ProductResponse)=>{
      this.data=data;
      this.product=data.products;
      console.log(this.product)
    })
  }

  // getDealWithFeature(_t15: {
  //   title: string;
  //   category: string;
  //   Oprice: number;
  //   Nprice: number;
  //   image: string;
  //   id: number;
  // }): import('../../models/productDto.modal').Product | null {
  //   throw new Error('Method not implemented.');
  // }
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
      id: 39,
    },
    {
      title: 'Game Consoles, Video Games & Consoles',
      category: 'Game Console Controller + USB 3.0 Cable',
      Oprice: 99.0,
      Nprice: 99.0,
      image:
        'https://electro.madrasthemes.com/wp-content/uploads/2016/03/consal-600x550.png',
      feature: '',
      id: 53,
    },
    {
      title: 'Aerocool EN52377 Dead Silence Gaming Cube Case',
      category: 'Aerocool EN52377 Dead Silence Gaming Cube Case',
      Oprice: 100.0,
      Nprice: 150.0,
      image:
        'https://electro.madrasthemes.com/wp-content/uploads/2016/03/gamecabin-300x300.png',
      feature: '',
      id: 37,
    },
    {
      title: 'Laptop Screener CX70 2QF-621XPL 17.3″ 4210',
      category: 'Laptops, Laptops & Computers',
      Oprice: 1215.0,
      Nprice: 1100.0,
      image:
        'https://electro.madrasthemes.com/wp-content/uploads/2016/03/applap-300x300.png',
      feature: '',
      id: 54,
    },
    {
      title: 'Widescreen 4K SUHD TV',
      category: 'Home Entertainment, TVs',
      Oprice: 559.0,
      Nprice: 559.0,
      image:
        'https://electro.madrasthemes.com/wp-content/uploads/2016/03/widetv-300x300.png',
      feature: '',
      id: 55,
    },
  ];
  isActiveTab: string = this.products[0].title;
  isActive(x: string) {
    this.isActiveTab = x;
  }
}
