package com.aashik.services;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@ComponentScan(basePackages = {"com.aashik.*"})
@EntityScan(basePackages = {"com.aashik.*"})
@EnableJpaRepositories(basePackages = {"com.aashik.*"})
public class PermanentProductApplication {

    public static void main(String[] args) {
        SpringApplication.run(PermanentProductApplication.class, args);
    }

}
