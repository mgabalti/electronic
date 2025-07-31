import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { FooterProductsComponent } from '../../shared/components/footer-products/footer-products.component';
import { BrandCarouselComponent } from '../../shared/items/brand-carousel/brand-carousel.component';
@Component({
  selector: 'app-account',
  imports: [
    NgClass,
    FormsModule,
    RouterLink,
    FooterProductsComponent,
    BrandCarouselComponent,
  ],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss',
})
export class AccountComponent {
  showPassword:boolean = false;
  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  userType: 'customer' | 'vendor' | null = null;
  password: string = '';
  invalidPassword: boolean = false;

  validatePassword() {
    this.invalidPassword = this.password.length > 0 && this.password.length < 12;
  }
}
