import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LatestProductComponent } from '../../shared/items/latest-product/latest-product.component';
import {
  Product,
  ProductDto,
  ProductResponse,
} from '../../shared/models/productDto.modal';
import { ProductServiceService } from '../../shared/services/product-service.service';
import { BrandCarouselComponent } from '../../shared/items/brand-carousel/brand-carousel.component';
import { FooterProductsComponent } from '../../shared/components/footer-products/footer-products.component';
import { ProductItemComponent } from '../../shared/items/product-item/product-item.component';
import { ActivatedRoute, Router, } from '@angular/router';
import { RatingComponent } from '../../shared/items/rating/rating.component';
import { ReviewSummaryComponent } from '../../shared/items/review-summary/review-summary.component';

@Component({
  selector: 'app-product-detail',
  imports: [
    LatestProductComponent,
    CommonModule,
    ProductItemComponent,
    BrandCarouselComponent,
    FooterProductsComponent,
    RatingComponent,
    ReviewSummaryComponent,
  ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent {
  data: Product | null = null;

  product: Product[] | null = null;

  // Injecting the ProductServiceService to fetch product details
  constructor(
    private pservice: ProductServiceService,
    private route: ActivatedRoute, private router: Router
  ) {}


  // Lifecycle hook that is called after the component has been initialized
  // This is where we will fetch the product details and subscribe to the BehaviorSubject
  ngOnInit() {
    // Fetch product details here
    const productId = this.route.snapshot.paramMap.get('id');

    this.pservice.getAllProduct().subscribe((data: ProductResponse) => {
      this.data = data.products.filter(
        (product: any) => product.id === Number(productId)
      )[0];
      if (!this.data) {
        this.router.navigate(['/listing'])
      }
      this.product=data.products;
      // this.product = data.products.map((x: any) => {
      //   return {
      //     id: x.id,
      //     category: x.category,
      //     image: x.images[0],
      //     title: x.title,
      //     price: x.price,
      //     Oprice: x.price,
      //     Nprice: x.discountPercentage,
      //     discountPercentage: x.discountPercentage,
      //     images: x.images,
      //     rating: x.rating,
      //     tags: x.tags,
      //     sku: x.sku,
      //     feature: x['feature'],
      //     stock: x.stock,
      //     availabilityStatus: x.availabilityStatus,
      //     meta: x.meta ?? {
      //       createdAt: '',
      //       updatedAt: '',
      //       barcode: '',
      //       qrCode: '',
      //     },
      //   };
      // });
      console.log(this.data);
    });
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

  // Find the discount percentage
  // This function calculates the discount percentage based on the original price and the discounted price

  getDiscountPercent(price: number, discounted: number): number {
    if (!price || price === discounted) return 0;
    const percent = ((price - discounted) / price) * 100;
    return Math.round(percent);
  }


// Toggle between Review and Products
  showSection: 'review' | 'products' = 'review';
}
