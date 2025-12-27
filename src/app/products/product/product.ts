import { Component, input, InputSignal } from '@angular/core';
import { ProductModel } from '../product.model';
import { RouterLink } from "@angular/router";
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [RouterLink,NgOptimizedImage],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  product : InputSignal<ProductModel> = input.required();
  
}
