package com.aashik.services.configs;

import com.aashik.models.Product;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.connection.jedis.JedisConnectionFactory;
import org.springframework.data.redis.core.RedisTemplate;

@Configuration
public class RedisConfigs {
    @Value("${spring.redis.port}")
    Integer redisPort;

    @Value("${spring.redis.host}")
    String redisHost;

    @Value("${spring.redis.password}")
    String redisPassword;

    @Bean
    public JedisConnectionFactory jedisConnectionFactory(){
        JedisConnectionFactory redisConnectionFactory = new JedisConnectionFactory();

        redisConnectionFactory.setHostName(redisHost);
        redisConnectionFactory.setPort(redisPort);
        redisConnectionFactory.setPassword(redisPassword);
        return redisConnectionFactory;
    }

    @Bean
    public RedisTemplate<String, Product> redisTemplate() {
        RedisTemplate<String, Product> template = new RedisTemplate<String, Product>();
        template.setConnectionFactory(jedisConnectionFactory());
        //template.setValueSerializer(new GenericToStringSerializer<Object>(Object.class));
        return template;
    }
}
