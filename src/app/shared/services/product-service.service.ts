import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProductResponse } from '../models/productDto.modal';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  constructor(private http: HttpClient) {}


  val: number = 5;
  get(): number {
    return this.val;
  }
  set(val: number): void {
    this.val = val;
  }

  mySubject = new BehaviorSubject<number>(0); // initial value = 0

setValue(value: number): void {
    this.mySubject.next(value  + this.val);
}
getValue(): Observable<number> {
  return this.mySubject.asObservable();
}



  getAllProduct(): Observable<ProductResponse> {
    return this.http.get<ProductResponse>("https://dummyjson.com/products");
  }

}
