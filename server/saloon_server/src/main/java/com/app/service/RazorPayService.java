package com.app.service;

import com.razorpay.Order;
import com.razorpay.RazorpayClient;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.app.dtos.OrderResponse;



@Service
public class RazorPayService {

 @Value("${razorpay.key.id}")
 private String razorpayKeyId;

 
 @Value("${razorpay.key.secret}")
 private String razorpayKeySecret;
 

 	public OrderResponse createOrder(int amount) throws Exception {
     RazorpayClient client = new RazorpayClient(razorpayKeyId, razorpayKeySecret);

     
     JSONObject options = new JSONObject();
     options.put("amount", amount * 100); // Amount in paise
     options.put("currency", "INR");
     options.put("receipt", "order_rcptid_11");

      
     Order order = client.Orders.create(options);

     // Map important details to OrderResponse
     return new OrderResponse(
    		 order.get("id"),
    		 order.get("amount"),
    		 order.get("currency"),
    		 order.get("receipt"),
    		 order.get("status")
    		 );
 	}
}
