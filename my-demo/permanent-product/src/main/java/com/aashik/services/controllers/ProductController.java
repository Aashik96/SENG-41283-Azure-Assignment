package com.aashik.services.controllers;

import com.aashik.models.Product;
import com.aashik.services.PermenantProductServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
public class ProductController {
    @Autowired
    PermenantProductServiceImpl permenantProductServiceImpl;

    @GetMapping("/test")
    public String test(){
        return "Success";
    }

    @GetMapping("/products")
    public List<Product> viewAllProducts(){
        return permenantProductServiceImpl.viewPermenantProducts();
    }

    @PostMapping("/product")
    public Product saveNewProduct(@RequestBody Product product){
        return permenantProductServiceImpl.addPermenantProduct(product);
    }

    @PutMapping("product/{id}")
    public void updateProduct(@PathVariable("id") String id,@RequestBody Product product){
        permenantProductServiceImpl.updatePermenantProduct(id,product);
    }

    @DeleteMapping("product/{id}")
    public void deleteProduct(@PathVariable("id") String id){
        permenantProductServiceImpl.deletePermenantProduct(id);
    }
}
