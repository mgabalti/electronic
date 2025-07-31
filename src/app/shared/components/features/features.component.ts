import { Component } from '@angular/core';
// import { TabletComponent } from '../../items/tablet-red-Elitebook/tablet/tablet.component';
// import { Smartphone6sComponent } from '../../items/smartphone/smartphone6s/smartphone6s.component';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../../items/product-item/product-item.component';
import { SaleItemComponent } from '../../items/sale-item/sale-item.component';
import { Product, ProductResponse } from '../../models/productDto.modal';
import { ProductServiceService } from '../../services/product-service.service';

@Component({
  selector: 'app-features',
  imports: [ProductItemComponent, SaleItemComponent, CommonModule],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss',
})
export class FeaturesComponent {
  data: ProductResponse | null = null;
  product: Product[] = [];
  isDisktop: boolean = true;

  beautyProducts: Product[] = [];
  groceryProducts: Product[] = [];
  fragranceProducts: Product[] = [];
  constructor(private pservices: ProductServiceService) {}

  ngOnInit() {
    //life cycle hook

    this.pservices.getAllProduct().subscribe((data: ProductResponse) => {
      this.data = data;
      this.product = data.products;

      this.beautyProducts = this.product.filter(
        (p) => p.category === 'beauty'
      );
      this.groceryProducts = this.product.filter(
        (p) => p.category === 'groceries'
      );
      this.fragranceProducts = this.product.filter(
        (p) => p.category === 'fragrances'
      );


      console.log(this.product);
    });
  }
  selectedTab: 'featured' | 'sale' | 'topRated' = 'featured';
}
