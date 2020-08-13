package com.aashik.services;

import com.aashik.models.Product;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import org.apache.http.HttpEntity;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.ResponseHandler;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.lang.reflect.Type;
import java.util.ArrayList;

@Service
public class MessageService {

    @Value("${messageservice.endpoint}")
    private String url;

    public String getWelcomeMessage() {
        String result = null;
        try (CloseableHttpClient httpclient = HttpClients.createDefault()) {


            HttpGet httpget = new HttpGet(url + "/api/message");
            System.out.println("Executing request " + httpget.getRequestLine());

            // Create a custom response handler
            ResponseHandler<String> responseHandler = response -> {
                int status = response.getStatusLine().getStatusCode();
                if (status >= 200 && status < 300) {
                    HttpEntity entity = response.getEntity();
                    return entity != null ? EntityUtils.toString(entity) : null;
                } else {
                    throw new ClientProtocolException("Unexpected response status: " + status);
                }
            };

            String responseBody = httpclient.execute(httpget, responseHandler);

            result = responseBody.toString();

            System.out.println(responseBody);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return result;
    }
}