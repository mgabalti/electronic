import { Component, Input } from '@angular/core';
import { ProductDto } from '../../models/productDto.modal';
import { ProductItemComponent } from "../product-item/product-item.component";

@Component({
  selector: 'app-related-product',
  imports: [ProductItemComponent],
  templateUrl: './related-product.component.html',
  styleUrl: './related-product.component.scss',
})
export class RelatedProductComponent {
@Input() product: ProductDto | null = null;
}
