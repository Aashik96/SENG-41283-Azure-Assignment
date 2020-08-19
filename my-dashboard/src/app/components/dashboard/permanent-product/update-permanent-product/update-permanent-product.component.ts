import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-permanent-product',
  templateUrl: './update-permanent-product.component.html',
  styleUrls: ['./update-permanent-product.component.css']
})
export class UpdatePermanentProductComponent implements OnInit {

  product : Product;
  id : string;

  constructor(private productService : ProductService,private route : ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    this.product = new Product();

    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.productService.getPermanentProductById(this.id).subscribe(res =>{
      this.product = res;
      console.log(this.product)
    })
  }

  updateProduct(){
    this.productService.updatePermanentProduct(this.id,this.product).subscribe(
      (product) => {
        console.log(product);
            
      }
    );
  }
}
