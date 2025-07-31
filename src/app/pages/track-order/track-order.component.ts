import { Component } from '@angular/core';
import { BrandCarouselComponent } from '../../shared/items/brand-carousel/brand-carousel.component';
import { FooterProductsComponent } from '../../shared/components/footer-products/footer-products.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-track-order',
  imports: [BrandCarouselComponent, FooterProductsComponent, FormsModule],
  templateUrl: './track-order.component.html',
  styleUrl: './track-order.component.scss',
})
export class TrackOrderComponent {
  email = '';
  ID: number | null = null;
  submitted = false;

  onSubmit() {
    this.submitted = true;
    if (this.ID) {
      console.log('Tracking id:',this.ID);
    }

    if (this.email) {
      console.log('Tracked product sent to:', this.email);
    }
  }
}
