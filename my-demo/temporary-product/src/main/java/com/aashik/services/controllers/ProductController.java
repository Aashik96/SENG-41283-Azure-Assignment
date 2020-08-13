package com.aashik.services.controllers;

import com.aashik.clients.PermanentProductClient;
import com.aashik.models.Product;
import com.aashik.services.MessageService;
import com.aashik.services.PermanentProductService;
import com.aashik.services.TemporaryProductServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
public class ProductController {
    @Autowired
    TemporaryProductServiceImpl temporaryProductServiceImpl;

    @Autowired
    PermanentProductService permanentProductService;

    @Autowired
    MessageService messageService;

    @GetMapping("/test")
    public String test(){
        return "Success";
    }

    @GetMapping("/permanent-products")
    public List<Product> getAllPermanentProducts() throws IOException {
        return permanentProductService.getAllProducts();

    }

    @PostMapping("/permanent-product")
    public void addNewPermanentProduct(@RequestBody Product product){
        permanentProductService.addNewProduct(product);

    }

    @PutMapping("/permanent-product/{id}")
    public void updatePermanentProduct(@PathVariable("id") String id,@RequestBody Product product){
        permanentProductService.updateProduct(id,product);
    }

    @DeleteMapping("/permanent-product/{id}")
    public void deletePermanentProduct(@PathVariable("id") String id){
        permanentProductService.deleteProduct(id);
    }

    @PostMapping("/temporary-product")
    public void addTemporaryProduct(@RequestBody Product product) {
        temporaryProductServiceImpl.save(product);
    }

    @GetMapping("/temporary-products")
    public List<Product> viewAllTemporaryProducts() {
        return temporaryProductServiceImpl.findAll();
    }

    @DeleteMapping("/temporary-product/{id}")
    public void deleteTemporaryProduct(@PathVariable("id") String id){
        temporaryProductServiceImpl.delete(id);
    }

    @GetMapping("/message")
    public String getMessage(){
        return messageService.getWelcomeMessage();
    }
}
