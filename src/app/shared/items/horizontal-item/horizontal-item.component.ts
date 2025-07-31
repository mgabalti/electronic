import { Component, Input } from '@angular/core';
import { ProductDto } from '../../models/productDto.modal';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-horizontal-item',
  imports: [CurrencyPipe],
  templateUrl: './horizontal-item.component.html',
  styleUrl: './horizontal-item.component.scss',
})
export class HorizontalItemComponent {
  @Input() Product?: ProductDto;
}
