package com.app.controller;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dtos.ApiResponse;
import com.app.dtos.CustomerReqDTO;


@RestController
@RequestMapping("/customers")
@CrossOrigin(origins = "http://localhost:3000")
public class CustomerController {
	

	@PostMapping("/register")
	public ResponseEntity<?> addNewCustomer(@RequestBody CustomerReqDTO dto) {
		
		System.out.println("in add new customer " + dto);
		try {
			return ResponseEntity.status(HttpStatus.CREATED)
					.body(dto);
					
		} catch (RuntimeException e) {
			return ResponseEntity.
					status(HttpStatus.INTERNAL_SERVER_ERROR)
					.body(new ApiResponse(e.getMessage()));
		}	
	}
	
}
