import { DecimalPipe } from '@angular/common';
import { ProductDto, ProductResponse } from '../../models/productDto.modal';
import { ProductServiceService } from '../../services/product-service.service';
import { Component, Input } from '@angular/core';
import { RatingComponent } from "../rating/rating.component";

@Component({
  selector: 'app-latest-product',
  imports: [DecimalPipe, RatingComponent],
  templateUrl: './latest-product.component.html',
  styleUrl: './latest-product.component.scss'
})
export class LatestProductComponent {
data:ProductResponse| null=null;
@Input() product:ProductDto|null=null;

constructor(private pservice:ProductServiceService){}


  ngOnInit(): void {
    this.pservice.getAllProduct().subscribe((data: ProductResponse) => {
      this.data = data;
      console.log(this.data);
    });


  }

}
