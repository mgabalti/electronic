import { Component, Input } from '@angular/core';
import { ProductDto } from '../../models/productDto.modal';

@Component({
  selector: 'app-horizontal-item',
  imports: [],
  templateUrl: './horizontal-item.component.html',
  styleUrl: './horizontal-item.component.scss',
})
export class HorizontalItemComponent {
  @Input() Product?: ProductDto;
}
