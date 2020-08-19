import { Component, OnInit,Input } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-temporary-product',
  templateUrl: './add-temporary-product.component.html',
  styleUrls: ['./add-temporary-product.component.css']
})
export class AddTemporaryProductComponent implements OnInit {

  @Input()
  product = {
    "id" : "",
    "productName" : "",
    "category" : "",
    "price":""
  };

  constructor(private productService : ProductService,private router : Router) { }

  ngOnInit(): void {
  }

  addNewProduct(){
    
    this.productService.addTemporaryProduct(this.product).subscribe(
      (product) => {
        console.log(product);
        this.router.navigate(['/dashboard/temporary-products/view'])
        
      }
    );

    
  }
}
