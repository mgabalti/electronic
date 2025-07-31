import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductResponse } from '../models/productDto.modal';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  constructor(private http: HttpClient) {}

  getAllProduct(): Observable<ProductResponse> {
    return this.http.get<ProductResponse>("https://dummyjson.com/products");
  }

}
