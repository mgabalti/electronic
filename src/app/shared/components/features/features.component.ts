import { Component } from '@angular/core';
// import { TabletComponent } from '../../items/tablet-red-Elitebook/tablet/tablet.component';
// import { Smartphone6sComponent } from '../../items/smartphone/smartphone6s/smartphone6s.component';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../../items/product-item/product-item.component';
import { SaleItemComponent } from '../../items/sale-item/sale-item.component';
import { ProductDto } from '../../models/productDto.modal';
import { productsdata } from '../../data/data';

@Component({
  selector: 'app-features',
  imports: [ProductItemComponent, SaleItemComponent, CommonModule],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss',
})
export class FeaturesComponent {
  selectedProduct: ProductDto[] = [];
  isDisktop: boolean = true;
  products: ProductDto[];
  constructor() {
    this.products = productsdata;
  }

  ngOnInit() {
    //life cycle hook
    this.isDisktop = window.innerWidth > 1200;
    this.filterProduct();
  }


  currenttab: string = '';
  filterProduct(z: string = '') {
    this.currenttab = z;
    this.selectedProduct = this.products.filter((x) => x.feature == z);
  }
}
