import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  Product,
  ProductResponse,
} from '../../../models/productDto.modal';
import { ProductServiceService } from '../../../services/product-service.service';
import { RatingComponent } from '../../rating/rating.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-view',
  imports: [CommonModule, RatingComponent, RouterLink],
  templateUrl: './list-view.component.html',
  styleUrl: './list-view.component.scss',
})
export class ListViewComponent {
  data: ProductResponse | null = null;
  @Input() product: Product | null = null;

  constructor(private pservice: ProductServiceService) {}

  ngOnInit(): void {
    this.pservice.getAllProduct().subscribe((data: ProductResponse) => {
      this.data = data;
      console.log(this.data);
    });
  }
}
