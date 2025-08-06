import { Component } from '@angular/core';
import { ProductItemComponent } from '../../items/product-item/product-item.component';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { Product, ProductResponse } from '../../models/productDto.modal';
import { HorizontalItemComponent } from "../../items/horizontal-item/horizontal-item.component";
import { ProductServiceService } from '../../services/product-service.service';

@Component({
  selector: 'app-recently-added',
  imports: [CarouselModule, ProductItemComponent],
  templateUrl: './recently-added.component.html',
  styleUrl: './recently-added.component.scss',

})
export class RecentlyAddedComponent {
products: Product[] | null = null;
data:ProductResponse|null=null

  constructor(private pservices:ProductServiceService){}

  ngOnInit(): void {
    this.pservices.getAllProduct().subscribe((data:ProductResponse)=>{
      this.data=data;
      this.products=data.products;
    })
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
