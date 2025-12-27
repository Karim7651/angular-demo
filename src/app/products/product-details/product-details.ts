import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product-service';
import { Spinner } from "../../spinner/spinner";
@Component({
  selector: 'app-product-details',
  imports: [Spinner],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {
  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);
  isFetching = this.productService.isFetchingSelectedProduct;

  product = this.productService.selectedProduct;
  error = this.productService.selectedError;
  ngOnInit(){
    this.productService.getProductById(Number(this.route.snapshot.paramMap.get('id')));
  }
}
