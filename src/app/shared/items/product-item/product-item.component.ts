import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/productDto.modal';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-item',
  imports: [ RouterLink, CurrencyPipe],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss',
})
export class ProductItemComponent implements OnInit {
  @Input() Product: Product | null = null;


  constructor(){}
  ngOnInit(): void {
  }

}
