import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  imports: [],
  template: `
    <span>
      @for (item of getStars(rating); track $index) {
      <span><i class="fa-solid fa-star"></i></span>
      }
    </span>
  `,
  styles: `
    span {
              font-size: 12px;
              color:var(--primary-color);
            }
  `,
})
export class RatingComponent {
  @Input() rating: number = 0;
  getStars(x: number): number[] {
    return Array(Math.floor(x)).fill(0);
  }
}
