import { Component, input, InputSignal } from '@angular/core';
import { ProductModel } from '../product.model';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-product',
  imports: [RouterLink],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  product : InputSignal<ProductModel> = input.required();
  
}
