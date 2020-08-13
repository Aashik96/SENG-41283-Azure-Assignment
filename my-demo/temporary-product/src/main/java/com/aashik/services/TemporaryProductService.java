package com.aashik.services;

import com.aashik.models.Product;

import java.util.List;
import java.util.Map;

public interface TemporaryProductService {
    void save(Product product);
    List<Product> findAll();
    Product findById(String id);
    void update(Product product);
    void delete(String id);
}
