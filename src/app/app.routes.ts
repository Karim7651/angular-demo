import { Routes } from '@angular/router';
import { App } from './app';
import { Products } from './products/products';
import { Contact } from './contact/contact';
import { Error } from './error/error';
import { Home } from './home/home';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'products', component: Products },
  { path: 'contact', component: Contact },
  { path: '**', component: Error }
];
