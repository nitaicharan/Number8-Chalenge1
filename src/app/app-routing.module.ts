import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: ':id', loadChildren: () => import('./modules/product-view/product-view.module').then(m => m.ProductViewModule) },
  { path: '', loadChildren: () => import('./modules/product-list/product-list.module').then(m => m.ProductListModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
