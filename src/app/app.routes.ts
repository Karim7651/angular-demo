import { Routes } from '@angular/router';
import { App } from './app';
import { Products } from './products/products';
import { Contact } from './contact/contact';
import { Error } from './error/error';
import { Home } from './home/home';
import { ProductDetails } from './products/product-details/product-details';
import { Demo } from './demo/demo';
import { ContactReactive } from './contact-reactive/contact-reactive';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'products', component: Products },
  { path: 'contact-template', component: Contact },
  { path: 'contact-reactive', component: ContactReactive },
  { path: 'products/:id', component: ProductDetails },
  { path: 'demo', component: Demo },
  { path: '**', component: Error },
];
