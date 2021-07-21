import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Product } from 'src/app/models/product.model';
import { NotificationService } from 'src/app/services/notification.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  product$: Observable<Product>
  stock: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private notificationService: NotificationService,
  ) { }

  ngOnInit(): void {
    this.fetchProduct();
  }

  fetchProduct() {
    this.product$ = this.productService.fetchProductByID(this.activatedRoute.snapshot.params.id).pipe(
      tap(product => this.stock = product.Stock),
    );
  }

  addToCart() {
    if (this.stock) {
      this.notificationService.notify("Product added successfully");
      this.stock--;
    }
  }

  getArrayNumbers(length: number) {
    return Array.from({ length }, (v, k) => k + 1);
  }
}
