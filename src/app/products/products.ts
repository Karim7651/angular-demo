import { Component, inject } from '@angular/core';
import { ProductService } from './product-service';
import { Product } from "./product/product";
import { Spinner } from '../spinner/spinner';

@Component({
  selector: 'app-products',
  imports: [Product,Spinner],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  private productService = inject(ProductService);
  products = this.productService.products;
}
