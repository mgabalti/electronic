import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  Product,
  ProductDto,
  ProductResponse,
} from '../../../models/productDto.modal';
import { ProductServiceService } from '../../../services/product-service.service';
import { RatingComponent } from '../../rating/rating.component';

@Component({
  selector: 'app-list-view',
  imports: [CommonModule,RatingComponent],
  templateUrl: './list-view.component.html',
  styleUrl: './list-view.component.scss',
})
export class ListViewComponent {
  data: ProductResponse | null = null;
  @Input() product: ProductDto  | null = null;

  constructor(private pservice: ProductServiceService) {}

  ngOnInit(): void {
    this.pservice.getAllProduct().subscribe((data: ProductResponse) => {
      this.data = data;
      console.log(this.data);
    });


  }
}
