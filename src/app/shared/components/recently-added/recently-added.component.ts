import { Component } from '@angular/core';
import { ProductItemComponent } from '../../items/product-item/product-item.component';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ProductDto } from '../../models/productDto.modal';
import { productsdata } from '../../data/data';

@Component({
  selector: 'app-recently-added',
  imports: [ProductItemComponent, CarouselModule],
  templateUrl: './recently-added.component.html',
  styleUrl: './recently-added.component.scss',

})
export class RecentlyAddedComponent {
products:ProductDto[]
  constructor(){
    this.products = productsdata;
  }
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: true,
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
        items: 3,
      },
      740: {
        items: 5,
      },
      940: {
        items: 5,
      },
    },
    nav: true,
  };

}
