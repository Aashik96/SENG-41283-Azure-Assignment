import { Component, OnInit,Input } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-permanent-product',
  templateUrl: './add-permanent-product.component.html',
  styleUrls: ['./add-permanent-product.component.css']
})
export class AddPermanentProductComponent implements OnInit {

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
    
    this.productService.addPermanentProduct(this.product).subscribe(
      (product) => {
        console.log(product);
        this.router.navigate(['/dashboard/permanent-products/view'])
        
      }
    );
}

}
