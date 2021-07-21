import { Product } from './../models/product.model';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private httpClient: HttpClient) { }

  fetchProducts = () => this.httpClient.get<Product[]>(environment.FAKE_API);
  fetchProductByID = (id: number) => this.httpClient.get<Product>(`${environment.FAKE_API}/${id}`);
}
