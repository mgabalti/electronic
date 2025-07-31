import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrandCarouselComponent } from "../brand-carousel/brand-carousel.component";
import { FooterProductsComponent } from "../../components/footer-products/footer-products.component";

@Component({
  selector: 'app-password-recovery',
  imports: [FormsModule, BrandCarouselComponent, FooterProductsComponent],
  template: `
    <div class="container">
      <div class="password-recovery text-dark">
        <div class="title">
          <h2>Lost password</h2>
        </div>

        <p>
          Lost your password? Please enter your username or email address. You
          will receive a link to create a new password via email.
        </p>

        <form #recoveryForm="ngForm" (ngSubmit)="onSubmit()">
          <label for="email">Username or email <span>*</span></label>
          <input
            type="text"
            id="email"
            name="email"
            [(ngModel)]="email"
            required
          />

          <button class="reset-btn btn" type="submit">Reset password</button>
        </form>
      </div>
      <app-brand-carousel></app-brand-carousel>
      <app-footer-products></app-footer-products>
    </div>
  `,
  styles: `
    .password-recovery {
  .title {
    display: flex;
    justify-content:center;
    align-items: center;
    margin: 20px 0px;

    h2 {
      font-size:39px;
      font-weight:400;
      margin: 0;
    }
  }
  p{
    font-size:14px;
  }

  label {
    display: block;
    margin-top: 15px;
    font-weight: 700;
    font-size:14px;
  }

  input[type='text'] {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    border: 1px solid var(--border-color);
    border-radius: 30px;
    outline: none;

    &:focus {
      border-color: var(--primary-color);
    }
  }

  .reset-btn {
    margin: 20px 0px;
    padding: 10px 20px;
    color: var(--dark-color);
    border: none;
    border-radius: 30px;
    cursor: pointer;

    &:hover {
      background-color: var(--dark-color);
      color:var(--text-color)
    }
  }
}

  `,
})
export class PasswordRecoveryComponent {
  email = '';
  submitted = false;

  onSubmit() {
    this.submitted = true;

    if (this.email) {
      console.log('Reset link sent to:', this.email);
    }
  }
}
