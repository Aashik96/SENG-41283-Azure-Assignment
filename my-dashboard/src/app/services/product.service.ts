import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient : HttpClient) { }

  private baseURL = "https://ashdemo.azurefd.net";

  viewAllPermanentProducts(){
    return this.httpClient.get<Product[]>(this.baseURL+'/permanent-products');  
  }

  addPermanentProduct(newProduct : any){
    return this.httpClient.post<Product>(this.baseURL+'/permanent-product',newProduct);
  }

  deleteProduct(id:string){
    return this.httpClient.delete(this.baseURL+'/permanent-product/'+id);  
  }

  updatePermanentProduct(id:string,updateProduct:any){
    return this.httpClient.put(this.baseURL+'/permanent-product/'+id,updateProduct);
  }

  viewAllTemporaryProducts(){
    return this.httpClient.get<any>(this.baseURL+'/temporary-products');  
  }

  addTemporaryProduct(newProduct : any){
    return this.httpClient.post<Product>(this.baseURL+'/temporary-product',newProduct);
  }

  deleteTemporaryProduct(id:string){
    return this.httpClient.delete(this.baseURL+'/temporary-product/'+id);  
  }

  updateTemporaryProduct(id:string,updateProduct:any){
    return this.httpClient.put(this.baseURL+'/temporary-product/'+id,updateProduct);
  }

  getPermanentProductById(id:string){
    return this.httpClient.get<Product>(this.baseURL+'/permanent-product/'+id)  
  }

  getTemporaryProductById(id:string){
    return this.httpClient.get<Product>(this.baseURL+'/temporary-product/'+id)  
  }
}
