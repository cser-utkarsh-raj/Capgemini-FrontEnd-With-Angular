import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class HttpService {
  http = inject(HttpClient)

  getData (){
    return this.http.get<ProductType[]>('https://fakestoreapi.com/products');
  }
}

export interface ProductType{
  id: number,
  title: string,
  image: string,
  price: number
}
