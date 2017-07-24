import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { ProductCreationComponent } from './product-creation/product-creation.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent, pathMatch: 'full'
  },
  {
    path: 'product-creation',
    component: ProductCreationComponent
  },
  {
    path: 'product-edit/:idx',
    component: ProductEditComponent
  },
  {
    path: 'products',
    component: ProductListComponent
  },
  {
    path: 'delete',
    redirectTo: '/products'
  },
  {
    path: 'update',
    redirectTo: '/products'
  },
  {
    path: 'create',
    redirectTo: '/products'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
