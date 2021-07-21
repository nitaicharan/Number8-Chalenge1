import { NotificationService } from 'src/app/services/notification.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductViewRoutingModule } from './product-view-routing.module';
import { ViewComponent } from './components/view/view.component';
import { ProductService } from 'src/app/services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ViewComponent
  ],
  imports: [
    CommonModule,
    ProductViewRoutingModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [
    ProductService,
    NotificationService,
  ]
})
export class ProductViewModule { }
