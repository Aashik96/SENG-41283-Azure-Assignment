import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-temporary-product',
  templateUrl: './update-temporary-product.component.html',
  styleUrls: ['./update-temporary-product.component.css']
})
export class UpdateTemporaryProductComponent implements OnInit {

  product : Product;
  id : string;

  constructor(private productService : ProductService,private route : ActivatedRoute, private router : Router) { }


  ngOnInit(): void {
    this.product = new Product();

    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.productService.getTemporaryProductById(this.id).subscribe(res =>{
      this.product = res;
      console.log(this.product)
    })
  }

  updateProduct(){
    this.productService.updateTemporaryProduct(this.id,this.product).subscribe(
      (product) => {
        console.log(product);
            
      }
    );
  }
}
