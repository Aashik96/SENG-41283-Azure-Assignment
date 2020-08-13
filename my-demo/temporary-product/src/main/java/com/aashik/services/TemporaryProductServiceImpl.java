package com.aashik.services;

import com.aashik.models.Product;
import org.springframework.data.redis.core.HashOperations;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class TemporaryProductServiceImpl implements TemporaryProductService{
    private RedisTemplate<String, Product> redisTemplate;

    private HashOperations hashOperations;


    public TemporaryProductServiceImpl(RedisTemplate<String, Product> redisTemplate) {
        this.redisTemplate = redisTemplate;

        hashOperations = redisTemplate.opsForHash();
    }

    @Override
    public void save(Product product) {
        hashOperations.put("PRODUCT", product.getId(), product);
    }

    @Override
    public List<Product> findAll() {
        List<Product> productList = new ArrayList<>();
        Map<String,Product> pr = hashOperations.entries("PRODUCT");

        for (Map.Entry<String,Product> entry : pr.entrySet()) {
            productList.add(entry.getValue());
            System.out.println("Key = " + entry.getKey() +
                    ", Value = " + entry.getValue());
        }

        return productList ; //hashOperations.entries("PRODUCT");
    }

    @Override
    public Product findById(String id) {
        return (Product)hashOperations.get("PRODUCT", id);
    }

    @Override
    public void update(Product product) {
        save(product);
    }

    @Override
    public void delete(String id) {

        hashOperations.delete("PRODUCT", id);
    }
}
