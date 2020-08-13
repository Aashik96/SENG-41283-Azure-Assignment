package com.aashik.services;

import com.aashik.models.Product;
import com.aashik.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PermenantProductServiceImpl implements PermenantProductService{

    @Autowired
    ProductRepository productRepository;


    @Override
    public Product addPermenantProduct(Product product) {
        Product addProduct = null;
        try{
            addProduct = productRepository.save(product);
        }catch (Exception exception){

        }
        return addProduct;
    }

    @Override
    public void deletePermenantProduct(String id) {
        try{
            productRepository.deleteById(id);
        }catch (Exception exception){

        }
    }

    @Override
    public void updatePermenantProduct(String id, Product product) {
        Product existProduct = null;
        try{
            existProduct = productRepository.findById(id).get();
            existProduct.setProductName(product.getProductName());
            existProduct.setCategory(product.getCategory());
            existProduct.setPrice(product.getPrice());
            productRepository.save(existProduct);
        }catch (Exception exception){

        }
    }

    @Override
    public List<Product> viewPermenantProducts() {
        List<Product> productList = null;
        try{
            productList = productRepository.findAll();
        }catch (Exception exception){

        }
        return productList;
    }
}
