import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  products$: Observable<Product[]>;

  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
    this.products$ = this.productService.fetchProducts();
  }
}
