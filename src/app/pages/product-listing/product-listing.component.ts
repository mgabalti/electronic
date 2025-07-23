import { ProductDto } from './../../shared/models/productDto.modal';
import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { ProductResponse } from '../../shared/models/productDto.modal';
import { ProductServiceService } from '../../shared/services/product-service.service';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../../shared/items/product-item/product-item.component';
import { ListViewComponent } from '../../shared/items/listing-items/list-view/list-view.component';
import { FormsModule } from '@angular/forms';
import { LatestProductComponent } from '../../shared/items/latest-product/latest-product.component';
import { FooterProductsComponent } from '../../shared/components/footer-products/footer-products.component';
import { BrandCarouselComponent } from '../../shared/items/brand-carousel/brand-carousel.component';
import { RatingComponent } from '../../shared/items/rating/rating.component';

@Component({
  selector: 'app-product-listing',
  imports: [
    CommonModule,
    ProductItemComponent,
    ListViewComponent,
    FormsModule,
    LatestProductComponent,
    FooterProductsComponent,
    BrandCarouselComponent,
    RatingComponent,
  ],
  templateUrl: './product-listing.component.html',
  styleUrl: './product-listing.component.scss',
})
export class ProductListingComponent implements OnInit {
  data: ProductResponse | null = null;
  product: ProductDto[] | null = null;
  limitedData: ProductDto[] | undefined;
  // categoryList: ProductDto[] | any;
  constructor(private pservice: ProductServiceService) {}
     
  ngOnInit(): void {
    this.pservice.getAllProduct().subscribe((data: ProductResponse) => {
      this.data = data;
      console.log(this.data);
      this.product = this.data.products.map((x) => {
        return {
          category: x.category,
          image: x.images[0],
          title: x.title,
          price: x.price,
          Oprice: x.price,
          Nprice: x.discountPercentage,
          discountPercentage: x.discountPercentage,
          images: x.images,
          rating: x.rating,
          tags: x.tags,
          sku: x.sku,
          feature: x['feature'],
          stock: x.stock,
          availabilityStatus: x.availabilityStatus,
          meta: x.meta ?? {
            createdAt: '',
            updatedAt: '',
            barcode: '',
            qrCode: '',
          },
        };
      });

      document.body.classList.add('light-mode');

      this.getCategory();

      this.calculateCategoryCounts();

      // debugger;
      this.limitedData = this.product.slice(0, 30);
      console.log(this.product);
      // return data;
    });
  }

  pageNumber: number = 1;

  // Product To Show
  onChangeLimit(event: any) {
    // debugger;
    let currentLimit = Number(event.target.value);
    if (currentLimit == 20) {
      if (this.product) {
        this.limitedData = this.product?.slice(0, 20);
      }
    } else {
      if (this.product) {
        this.limitedData = this.product;
      }
    }
  }

  // Product View
  currentView: 'grid' | 'extend-grid' | 'list' = 'grid';
  setView(view: 'grid' | 'extend-grid' | 'list') {
    this.currentView = view;
  }

  // Show All Category lists

  showAllCategory: boolean = false;

  toggleShowAll() {
    this.showAllCategory = !this.showAllCategory;
  }

  // Price Range

  // Show More Products
  showMore: boolean = false;

  //Check Filter Products

  categoryList: string[] = [];
  selectedCategories: string[] = [];

  getCategory() {
    const newArr = [...new Set(this.product?.map((a) => a.category))];
    this.categoryList = newArr;
    console.log(this.categoryList);
  }

  onCategoryChange(event: any) {
    const category = event?.target.value;
    if (event.target.checked) {
      this.selectedCategories.push(category);
    } else {
      this.selectedCategories = this.selectedCategories.filter(
        (x) => x !== category
      );
    }
    this.applyCategoryFilter();
  }
  applyCategoryFilter() {
    if (this.selectedCategories.length === 0) {
      this.limitedData = this.product?.slice(0, 30);
    } else {
      this.limitedData = this.product?.filter((x) =>
        this.selectedCategories.includes(x.category)
      );
    }
  }

  // Product Price Filter

  productList: ProductDto[] = [];
  priceRange = { min: 0, max: 50 };
  minPrice: number = this.priceRange.min;
  maxPrice: number = this.priceRange.max;

  onMinChange() {
    if (this.minPrice >= this.maxPrice) {
      this.minPrice === this.maxPrice;
    }
    this.applyPriceFilter();
  }

  onMaxChange() {
    if (this.maxPrice <= this.minPrice) {
      this.maxPrice === this.minPrice;
    }
    this.applyPriceFilter();
  }

  applyPriceFilter() {
    this.limitedData = this.productList.filter((p) => {
      const matchCategory =
        this.selectedCategories.length === 0 ||
        this.selectedCategories.includes(p.category);

      const matchPrice =
        (p.price ?? 0) >= this.minPrice && (p.price ?? 0) <= this.maxPrice;

      return matchCategory && matchPrice;
    });
  }
  getStars(x: number): number[] {
    return Array(Math.floor(x)).fill(0);
  }
  // Product Sorting
  sortProduct(option: string) {
    switch (option) {
      case 'popularity':
        this.limitedData = [...(this.product ?? [])].sort(
          (a, b) => (b.stock ?? 0) - (a.stock ?? 0)
        );
        break;
      case 'rating':
        this.limitedData = [...(this.product ?? [])].sort(
          (a, b) => (b.rating ?? 0) - (a.rating ?? 0)
        );
        break;
      case 'latest':
        this.limitedData = [...(this.product ?? [])].sort((a, b) =>
          (a.meta?.barcode ?? '').localeCompare(b.meta?.barcode ?? '')
        );
        break;
      case 'availability':
        this.limitedData = [...(this.product ?? [])].sort((a, b) =>
          (b.availabilityStatus ?? '').localeCompare(a.availabilityStatus ?? '')
        );
        break;
      case 'priceLowToHigh':
        this.limitedData = [...(this.product ?? [])].sort(
          (a, b) =>
            ((a.discountPercentage || b.price) ?? 0) -
            ((b.discountPercentage || b.price) ?? 0)
        );
        break;
      case 'priceHighToLow':
        this.limitedData = [...(this.product ?? [])].sort(
          (a, b) => (b.discountPercentage ?? 0) - (a.discountPercentage ?? 0)
        );
        break;
      default:
        this.limitedData = this.product?.slice(0, 30);
    }
  }

  //Category Item Counter
  categoryCounts: { [x: string]: number } = {};
  calculateCategoryCounts() {
    this.categoryCounts = {};
    for (const item of this.product ?? []) {
      const newCat=item.category;
      if(this.categoryCounts[newCat]){
        this.categoryCounts[newCat]++;
      }
      else{
        this.categoryCounts[newCat]=1;
      }
    }
  }

  //Filter toggle
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



  // Dark And Light Mood

  // isDarkMode = false;
  // toggleTheme() {
  //   this.isDarkMode = !this.isDarkMode;

  //   if (this.isDarkMode) {
  //     document.body.classList.add('dark-mode');
  //     document.body.classList.remove('light-mode');
  //   } else {
  //     document.body.classList.add('light-mode');
  //     document.body.classList.remove('dark-mode');
  //   }
  // }
}
