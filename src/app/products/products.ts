import { Component, inject, signal } from '@angular/core';
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
  error = this.productService.error;
  selectedProduct = signal('');
  ngOnInit(){
    this.productService.getProducts();
  }
  onMouseEnter(name: string){
    this.selectedProduct.set(`Selected product with id ${name}`);
  }
  onMouseLeave(){
    this.selectedProduct.set('');
  }
}
