import { Component, Input, OnInit } from '@angular/core';
import { ProductDto } from '../../models/productDto.modal';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-item',
  imports: [ RouterLink],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss',
})
export class ProductItemComponent implements OnInit {
  @Input() Product: ProductDto | null = null;

  ngOnInit(): void {
    console.log(this.Product);
  }

}
