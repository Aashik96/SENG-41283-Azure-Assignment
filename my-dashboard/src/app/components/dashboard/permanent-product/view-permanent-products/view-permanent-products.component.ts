import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-permanent-products',
  templateUrl: './view-permanent-products.component.html',
  styleUrls: ['./view-permanent-products.component.css']
})
export class ViewPermanentProductsComponent implements OnInit {

  products : Product[];

  constructor(private productService : ProductService,private router : Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    this.productService.viewAllPermanentProducts().subscribe(products=>
      {
        console.log(products);
        this.products = products
      },
      err =>{
        console.log("Error .....")
        console.log(err.status)
        if(err.status == 401){
          this.router.navigate(['/'])
        }
      })  
  }

  deleteProduct(id:string){
    this.productService.deleteProduct(id).subscribe(data=>{
      console.log(data)
      this.reloadData()
    })  
  }

  updateProduct(id:string,product:Product){
    this.router.navigate(['/dashboard/permanent-products/update',id])
  }

}
