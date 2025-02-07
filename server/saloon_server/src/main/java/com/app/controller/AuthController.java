package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.dtos.AuthRequest;
import com.app.dtos.AuthResp;
import com.app.entities.Admin;
import com.app.entities.Barber;
import com.app.security.CustomUserDetailsImpl;
import com.app.security.JwtUtils;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtUtils jwtUtils;

    @PostMapping("/signin")
    public ResponseEntity<?> userSignIn(@RequestBody @Valid AuthRequest dto) {
        System.out.println("in sign in " + dto);
        
        // 1. Create auth token using user-supplied email and password
        UsernamePasswordAuthenticationToken authenticationToken = 
                new UsernamePasswordAuthenticationToken(dto.getEmail(), dto.getPassword());
        
        // 2. Invoke Spring Security authentication manager's authenticate method
        Authentication authToken = authenticationManager.authenticate(authenticationToken);
        SecurityContextHolder.getContext().setAuthentication(authToken);

        CustomUserDetailsImpl userDetails =  (CustomUserDetailsImpl) authToken.getPrincipal();
        
        String userType;
        if (userDetails.getUser() instanceof Admin) {
            userType = "ADMIN";
        } else if (userDetails.getUser() instanceof Barber) {
            userType = "BARBER";
        } else {
            userType = "CUSTOMER";
        }
        // 3. Send auth response to the client containing JWT
        return ResponseEntity.status(HttpStatus.CREATED)
                             .body(new AuthResp("Successful Auth!", jwtUtils.generateJwtToken(authToken), userType));        
    }
    
    @PostMapping("/signout")
    public ResponseEntity<?> userLogout(HttpServletRequest request) {
    	System.out.println("in logout");
    	String authHeader = request.getHeader("Authorization");
    	
    	System.out.println(authHeader);
    	
        if (authHeader != null && authHeader.startsWith("Bearer ")) {
        	String jwt = authHeader.substring(7);
        
        	// Optionally, invalidate the JWT token (e.g., add it to a blacklist)
        	// jwtUtils.invalidateToken(jwt); // Example method to blacklist the token

        	// Clear the security context
        	SecurityContextHolder.clearContext();
        }
        return ResponseEntity.ok("Successfully logged out");
    }
}
