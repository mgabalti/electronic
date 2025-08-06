import { Component, Input } from '@angular/core';
import { Product, ProductDto, ProductResponse } from '../../models/productDto.modal';

@Component({
  selector: 'app-review-summary',
  imports: [],
  templateUrl: './review-summary.component.html',
  styleUrl: './review-summary.component.scss'
})
export class ReviewSummaryComponent {
@Input() data:Product|null = null;
}
