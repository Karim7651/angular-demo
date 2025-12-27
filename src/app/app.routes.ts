import { Routes } from '@angular/router';
import { App } from './app';
import { Products } from './products/products';
import { Contact } from './contact/contact';
import { Error } from './error/error';
import { Home } from './home/home';
import { ProductDetails } from './products/product-details/product-details';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'products', component: Products },
  { path: 'contact', component: Contact },
  { path: 'products/:id', component: ProductDetails },
  { path: '**', component: Error },
];
