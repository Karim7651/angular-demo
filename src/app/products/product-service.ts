import { inject, Injectable, Signal } from '@angular/core';
import { environment } from '../../environment';
import { ProductModel } from './product.model';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
@Injectable({
  providedIn: 'root',

})
export class ProductService {
  private apiUrl = `${environment.apiBaseUrl}/products`;
  products: Signal<ProductModel[]>;
  private httpClient = inject(HttpClient);
  constructor() {
    this.products = toSignal(this.httpClient.get<ProductModel[]>(this.apiUrl), { initialValue: [] });
  }
  getProducts() {

  }

}
