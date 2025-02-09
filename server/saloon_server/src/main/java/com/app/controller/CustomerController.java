package com.app.controller;

import java.util.List;

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

import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import com.app.security.JwtUtils;
import com.app.dtos.AdminResDTO;
import com.app.dtos.ApiResponse;
import com.app.dtos.AuthRequest;
import com.app.dtos.AuthResp;
import com.app.dtos.BarberResDTO;
import com.app.dtos.CustomerReqDTO;
import com.app.dtos.CustomerResDTO;
import com.app.service.CustomerService;

import io.jsonwebtoken.Claims;

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
	
	@GetMapping("/profile")
    public ResponseEntity<?> getCustomerProfile(HttpServletRequest request) {
    	System.out.println("in get profile");
    	String authHeader = request.getHeader("Authorization");
    	
    	System.out.println(authHeader);
    	Long userId = null;
   
        try {
        	if (authHeader != null && authHeader.startsWith("Bearer ")) {
        		String jwt = authHeader.substring(7);
        		
        		// Validate token and extract claims
        		Claims claims = jwtUtils.validateJwtToken(jwt);
        		
        		// Retrieve user ID from claims
        		userId = jwtUtils.getUserIdFromJwtToken(claims);
        	}
        	
        	CustomerResDTO customerResDTO = customerService.getCustomerById(userId);
        	
        	System.out.println(customerResDTO);
        	return ResponseEntity.ok(customerResDTO);
        	
        } catch (RuntimeException e) {
        	return ResponseEntity.status(HttpStatus.NOT_FOUND)
        			.body(new ApiResponse(e.getMessage()));
        }   
    }
	
	@GetMapping("/getBarbers")
	public ResponseEntity<?> getAllBarbers() {
		System.out.println("in get all barbers");
		List<BarberResDTO> barbers = 
				customerService.getAllBarbers();
		if (barbers.isEmpty()) {
			// SC 204
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
		} else {
			// SC 200 + list
			return ResponseEntity.ok(barbers);
		}
	}
	
	@GetMapping("/getBarber/{barberId}")
	public ResponseEntity<?> getCategoryAndPosts(@PathVariable Long barberId){
		System.out.println("in get barber n hairstyles "+barberId);
		try {
		return ResponseEntity.ok(customerService.getBarberWithStyles(barberId));
		} catch (RuntimeException e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND)
					.body(new ApiResponse(e.getMessage()));
		}
	}
}
