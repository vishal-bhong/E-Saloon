package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.Authentication;
import jakarta.validation.Valid;
import com.app.security.JwtUtils;

import com.app.dtos.ApiResponse;
import com.app.dtos.AuthRequest;
import com.app.dtos.AuthResp;
import com.app.dtos.CustomerReqDTO;
import com.app.service.CustomerService;

@RestController
@RequestMapping("/customers")
@CrossOrigin(origins = "http://localhost:3000")
public class CustomerController {
	
	@Autowired
	private CustomerService customerService;
	
	@Autowired
	private AuthenticationManager authenticationManager;
	
	@Autowired
	private JwtUtils jwtUtils;

	@PostMapping("/register")
	public ResponseEntity<?> addNewCustomer(@RequestBody CustomerReqDTO dto) {
		
		System.out.println("in add new customer " + dto);
		try {
			return ResponseEntity.status(HttpStatus.CREATED)
					.body(customerService
							.registerCustomer(dto));
					
		} catch (RuntimeException e) {
			return ResponseEntity.
					status(HttpStatus.INTERNAL_SERVER_ERROR)
					.body(new ApiResponse(e.getMessage()));
		}
		
	}
	
	@PostMapping("/signin")
	public ResponseEntity<?> customerSignIn(@RequestBody @Valid
			AuthRequest dto) {
		System.out.println("in sign in "+dto);
		
		//1. Create auth token using suser supplied em n pwd
		UsernamePasswordAuthenticationToken authenticationToken = 
				new UsernamePasswordAuthenticationToken(dto.getEmail(),dto.getPassword());
		
		System.out.println(authenticationToken.isAuthenticated());//f
		
		//2. invoke Spring sec supplied auth mgr's authenticate method
		Authentication authToken = authenticationManager.authenticate(authenticationToken);
		//=> auth success
		
		System.out.println(authToken.isAuthenticated());//t
		//3 . Send auth respone to the client containing JWTS
		return ResponseEntity.status(HttpStatus.CREATED)
							 .body(new AuthResp("Successful Auth !", jwtUtils.generateJwtToken(authToken)));		
	}
}
