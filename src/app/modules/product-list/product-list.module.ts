import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductListRoutingModule } from './product-list-routing.module';
import { ProductService } from '../../services/product.service';
import { PreviewComponent } from './components/preview/preview.component';



@NgModule({
  declarations: [
    ListComponent,
    PreviewComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ProductListRoutingModule,
  ],
  providers: [
    ProductService,
  ]
})
export class ProductListModule { }
