import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-temporary-products',
  templateUrl: './view-temporary-products.component.html',
  styleUrls: ['./view-temporary-products.component.css']
})
export class ViewTemporaryProductsComponent implements OnInit {

  products : any;

  constructor(private productService : ProductService,private router : Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    this.productService.viewAllTemporaryProducts().subscribe(products=>
      {
        
        console.log (products.length);
        console.log(products);
      this.products = products},
      err =>{
        console.log("Error .....")
        console.log(err.status)
        if(err.status == 401){
          this.router.navigate(['/login'])
        }
      })  
  }

  deleteProduct(id:string){
    this.productService.deleteTemporaryProduct(id).subscribe(data=>{
      console.log(data)
      this.reloadData()
    })  
  }

  updateProduct(id:string,product:Product){
    this.router.navigate(['/dashboard/temporary-products/update',id])
  }

}
