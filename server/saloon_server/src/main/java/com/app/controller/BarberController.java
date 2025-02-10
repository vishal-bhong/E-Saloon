package com.app.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dtos.AdminResDTO;
import com.app.dtos.ApiResponse;
import com.app.dtos.BarberAppointmentDTO;
import com.app.dtos.BarberReqDTO;
import com.app.dtos.BarberResDTO;
import com.app.security.JwtUtils;
import com.app.service.BarberService;

import io.jsonwebtoken.Claims;
import jakarta.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/barber")
@CrossOrigin(origins = "http://localhost:3000")
public class BarberController {
	
	@Autowired
	private BarberService barberService;
	
    @Autowired
    private JwtUtils jwtUtils;
	

	@PostMapping("/register")
	public ResponseEntity<?> addNewBarber(@RequestBody BarberReqDTO dto) {
		
		System.out.println("in add new barber " + dto);
		try {
			return ResponseEntity.status(HttpStatus.CREATED)
					.body(barberService.registerBarber(dto));
					
		} catch (RuntimeException e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
								 .body(new ApiResponse(e.getMessage()));
		}
		
	}
	
	@GetMapping("/profile")
    public ResponseEntity<?> getBarberProfile(HttpServletRequest request) {
    	System.out.println("in get barber profile");
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
        	
        	BarberResDTO barberResDTO = barberService.getBarberById(userId);
        	
        	return ResponseEntity.ok(barberResDTO);
        	
        } catch (RuntimeException e) {
        	return ResponseEntity.status(HttpStatus.NOT_FOUND)
        			.body(new ApiResponse(e.getMessage()));
        }   
    }
	
	@PutMapping("/update/profile")
	public ResponseEntity<?> updateCategoryDetails(@RequestBody BarberReqDTO dto ,HttpServletRequest request) {
    	System.out.println("in update barber profile");
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
        	
            if (userId == null) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                        .body(new ApiResponse("Invalid or missing token"));
            }
        	
        	return ResponseEntity.ok(barberService.updateBarberDetails(dto,userId));
	
        } catch (RuntimeException e) {
        	return ResponseEntity.status(HttpStatus.NOT_FOUND)
        			.body(new ApiResponse(e.getMessage()));
        } 
	}
	
	@GetMapping("/appointments")
	public ResponseEntity<?> getBarberAppointments(HttpServletRequest request) {
	    System.out.println("Fetching barber appointments");
	    String authHeader = request.getHeader("Authorization");

	    System.out.println(authHeader);
	    Long barberId = null;

	    try {
	        if (authHeader != null && authHeader.startsWith("Bearer ")) {
	            String jwt = authHeader.substring(7);

	            // Validate token and extract claims
	            Claims claims = jwtUtils.validateJwtToken(jwt);

	            // Retrieve user ID from claims
	            barberId = jwtUtils.getUserIdFromJwtToken(claims);
	        }

	        List<BarberAppointmentDTO> appointments = barberService.getBarberAppointments(barberId);
	        
	 		if (appointments.isEmpty()) {
				// SC 204
				return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
			} else {
				// SC 200 + list
				return ResponseEntity.ok(appointments);
			}

	    } catch (RuntimeException e) {
	        return ResponseEntity.status(HttpStatus.NOT_FOUND)
	                .body(new ApiResponse(e.getMessage()));
	    }
	}
	
	
	@PutMapping("/updateAppointmentStatus/{appointmentId}")
	public ResponseEntity<?> updateAppointmentStatus(@PathVariable Long appointmentId, @RequestBody Map<String, String> requestBody) {
	    try {
	        String status = requestBody.get("status");
	        
	        return ResponseEntity.ok(barberService.updateAppointmentStatus(appointmentId, status));
	        
	    } catch (RuntimeException e) {
	        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse(e.getMessage()));
	    }
	}


}
