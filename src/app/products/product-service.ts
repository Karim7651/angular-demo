import { inject, Injectable, signal, Signal } from '@angular/core';
import { environment } from '../../environment';
import { ProductModel } from './product.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',

})
export class ProductService {
  private apiUrl = `${environment.apiBaseUrl}/products`;
  products = signal<ProductModel[] | null>(null);
  
  error = signal<string | null>(null);
  selectedProduct = signal<ProductModel| null>(null);
  selectedError = signal<string | null>(null);
  isFetchingSelectedProduct = signal<boolean>(false);
  private httpClient = inject(HttpClient);
  
  getProducts() {
    this.httpClient.get<ProductModel[]>(this.apiUrl).subscribe({
      next:(data)=>{
        this.products.set(data);
      },
      error:(error)=>{
        this.error.set('Failed to load products. Please try again later.');
      }
    });
  }
  getProductById(id: number) {
    this.isFetchingSelectedProduct.set(true);
     this.httpClient.get<ProductModel>(`${this.apiUrl}/${id}`).subscribe({
      next:(data)=>{
        this.selectedProduct.set(data);
      },error:(error)=>{
        this.selectedError.set('Failed to load product details. Please try again later.');
      },complete:()=>{
        this.isFetchingSelectedProduct.set(false);
      }
     });
  }

}
