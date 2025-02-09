package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dtos.ApiResponse;
import com.app.dtos.BarberResDTO;
import com.app.dtos.CustomerResDTO;
import com.app.dtos.HairStyleDTO;
import com.app.security.JwtUtils;
import com.app.service.HairStyleService;

import io.jsonwebtoken.Claims;
import jakarta.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/barber/style")
@CrossOrigin(origins = "http://localhost:3000")
public class HairStyleController {
	
    @Autowired
    private JwtUtils jwtUtils;
    
    @Autowired
    private HairStyleService hairStyleService; 
    
    
	@GetMapping("/byToken")
	public ResponseEntity<?> getStylesByBarberToken(HttpServletRequest request)
	{
		System.out.println("in get barber styles");
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
        	List<HairStyleDTO> styles = hairStyleService.getHairStylesByBarber(userId);
        	
    		if (styles.isEmpty()) {
    			// SC 204
    			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    		} else {
    			// SC 200 + list
    			return ResponseEntity.ok(styles);
    		}
        	        	
        } catch (RuntimeException e) {
        	return ResponseEntity.status(HttpStatus.NOT_FOUND)
        			.body(new ApiResponse(e.getMessage()));
        }   
	}
	
	@PostMapping("/byToken")
	public ResponseEntity<?> addNewStyle(@RequestBody HairStyleDTO dto, HttpServletRequest request) {
		System.out.println("in add barber styles");
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
        	return ResponseEntity.status(HttpStatus.CREATED)
        			.body(hairStyleService.addNewStyle(dto, userId));

		} catch (RuntimeException e) {
			return ResponseEntity
					.status(HttpStatus.BAD_REQUEST)
					.body(new ApiResponse(e.getMessage()));
		}
	}
	
	@DeleteMapping("/{styleId}")
	public ResponseEntity<?> deleteStyle(@PathVariable Long styleId, HttpServletRequest request) {
		System.out.println("in delete style " + styleId);
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
        	return ResponseEntity.ok(hairStyleService.deleteHairStyle(userId, styleId));


		} catch (RuntimeException e) {
			return ResponseEntity
					.status(HttpStatus.BAD_REQUEST)
					.body(new ApiResponse(e.getMessage()));
		}
		
	}
}
