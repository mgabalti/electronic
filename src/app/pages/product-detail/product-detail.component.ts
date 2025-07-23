import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LatestProductComponent } from '../../shared/items/latest-product/latest-product.component';
import {
  Product,
  ProductDto,
  ProductResponse,
} from '../../shared/models/productDto.modal';
import { ProductServiceService } from '../../shared/services/product-service.service';
import { RelatedProductComponent } from "../../shared/items/related-product/related-product.component";
import { BrandCarouselComponent } from "../../shared/items/brand-carousel/brand-carousel.component";
import { FooterProductsComponent } from "../../shared/components/footer-products/footer-products.component";
import { ProductItemComponent } from '../../shared/items/product-item/product-item.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  imports: [LatestProductComponent, CommonModule, ProductItemComponent, RelatedProductComponent, BrandCarouselComponent, FooterProductsComponent],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent {

  data: Product | null = null;

  product: ProductDto[] | undefined;

 
  // Injecting the ProductServiceService to fetch product details
  constructor( private pservice: ProductServiceService, private route: ActivatedRoute) {}

  // Observable value for testing BehaviorSubject
  // This will be used to demonstrate the BehaviorSubject functionality
  obs: number = 0;
  NormalValue: number = 0;

  // Lifecycle hook that is called after the component has been initialized
  // This is where we will fetch the product details and subscribe to the BehaviorSubject
  ngOnInit() {
    // Fetch product details here
        const productId = this.route.snapshot.paramMap.get('id');

    this.pservice.getAllProduct().subscribe((data: ProductResponse) => {
      this.data = data.products.filter((product:any) => product.id === Number(productId))[0];
      
      console.log(this.data);
    
    });

    // Subscribe to BehaviorSubject to get the value
    // This will allow us to see the changes in the value
    this.pservice.getValue().subscribe((value) => {
      this.obs = value;
      console.log('Value from BehaviorSubject:', value);
    });
    this.NormalValue = this.pservice.get();
  }

  // Test function to set value
  // This function is just for testing purposes to see the BehaviorSubject in action

  setvalue() {
    this.pservice.setValue(this.obs + 1);
    this.pservice.set(this.NormalValue + 1);
  }


  //Filter toggle
  // This will be used to toggle the sidebar
  openSidebar = false;
  insideSidebar = false;
  toggleSidebar() {
    this.openSidebar = !this.openSidebar;
  }
  closeSidebar() {
    if ((this.openSidebar = !this.openSidebar)) {
      this.openSidebar = false;
    }
  }

  // Show All Category lists
  // This will be used to show all categories in the sidebar
  // It will toggle the visibility of the category list
  showAllCategory: boolean = false;
  toggleShowAll() {
    this.showAllCategory = !this.showAllCategory;
  }

  // Give Rating
  // This will be used to give rating to the product
  // It will allow the user to rate the product by clicking on the stars
  rating = 0;
  hovered = 0;
  stars = Array(5);
  rate(value: number) {
    this.rating = value;
  }
}
