import { Component, Input } from '@angular/core';
import { ProductDto } from '../../models/productDto.modal';

@Component({
  selector: 'app-product-item',
  imports: [],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss',
})
export class ProductItemComponent {
  @Input() Product: ProductDto | null = null;
}
