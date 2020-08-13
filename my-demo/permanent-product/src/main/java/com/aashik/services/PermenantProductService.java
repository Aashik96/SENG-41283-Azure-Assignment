package com.aashik.services;

import com.aashik.models.Product;

import java.util.List;

public interface PermenantProductService {
    Product addPermenantProduct(Product product);
    void deletePermenantProduct(String id);
    void updatePermenantProduct(String id,Product product);
    List<Product> viewPermenantProducts();
}
