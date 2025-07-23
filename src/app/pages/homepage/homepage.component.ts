import { Component } from '@angular/core';
import { HerosectionComponent } from '../../shared/components/herosection/herosection.component';
import { FeaturesComponent } from '../../shared/components/features/features.component';
import { FooterProductsComponent } from "../../shared/components/footer-products/footer-products.component";
import { BestDealComponent } from "../../shared/components/best-deal/best-deal.component";
import { BestSellersComponent } from "../../shared/components/best-sellers/best-sellers.component";
import { RecentlyAddedComponent } from "../../shared/components/recently-added/recently-added.component";
import { SaleBannerComponent } from "../../shared/items/sale-banner/sale-banner.component";
import { BrandCarouselComponent } from "../../shared/items/brand-carousel/brand-carousel.component";

@Component({
  selector: 'app-homepage',
  imports: [HerosectionComponent, FeaturesComponent, FooterProductsComponent, BestDealComponent, BestSellersComponent, RecentlyAddedComponent, SaleBannerComponent, BrandCarouselComponent],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {

}
