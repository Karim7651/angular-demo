import { Component, input, InputSignal } from '@angular/core';
import { ProductModel } from '../product.model';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  product : InputSignal<ProductModel> = input.required();
}
