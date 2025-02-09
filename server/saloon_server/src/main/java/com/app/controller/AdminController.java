package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dtos.AdminReqDTO;
import com.app.dtos.AdminResDTO;
import com.app.dtos.ApiResponse;
import com.app.dtos.CustomerResDTO;
import com.app.dtos.BarberResDTOForAdminPanel;
import com.app.security.JwtUtils;
import com.app.service.AdminService;

import io.jsonwebtoken.Claims;
import jakarta.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "http://localhost:3000")
public class AdminController {

	@Autowired
	private AdminService adminService;
	
    @Autowired
    private JwtUtils jwtUtils;
	

	@PostMapping("/register")
	public ResponseEntity<?> addNewBarber(@RequestBody AdminReqDTO dto) {
		
		System.out.println("in add new Admin " + dto);
		try {
			return ResponseEntity.status(HttpStatus.CREATED)
					.body(adminService.registerAdmin(dto));
					
		} catch (RuntimeException e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
								 .body(new ApiResponse(e.getMessage()));
		}
		
	}
	
	@GetMapping("/profile")
    public ResponseEntity<?> getAdminProfile(HttpServletRequest request) {
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
        	
        	AdminResDTO adminResDTO = adminService.getAdminById(userId);
        	
        	System.out.println(adminResDTO);
        	return ResponseEntity.ok(adminResDTO);
        	
        } catch (RuntimeException e) {
        	return ResponseEntity.status(HttpStatus.NOT_FOUND)
        			.body(new ApiResponse(e.getMessage()));
        }   
    }
	
	
	@GetMapping("/getCustomers")
	public ResponseEntity<?> getAllCustomers() {
		System.out.println("in get all customers");
		List<CustomerResDTO> customers = 
				adminService.getAllCustomers();
		if (customers.isEmpty()) {
			// SC 204
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
		} else {
			// SC 200 + list
			return ResponseEntity.ok(customers);
		}
	}
	
	
	@DeleteMapping("/delete/customer/{customerId}")
	public ResponseEntity<?> deleteCustomer(@PathVariable Long customerId) {
		System.out.println("in delete customer " + customerId);
		return ResponseEntity.ok(adminService.deleteCustomer(customerId));
	}
	
	
	
	@GetMapping("/getBarbers")
	public ResponseEntity<?> getAllBarbers() {
		System.out.println("in get all barbers");
		List<BarberResDTOForAdminPanel> barbers = 
				adminService.getAllBarbers();
		if (barbers.isEmpty()) {
			// SC 204
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
		} else {
			// SC 200 + list
			return ResponseEntity.ok(barbers);
		}
	}
	
		
	
	@DeleteMapping("/delete/barber/{barberId}")
	public ResponseEntity<?> deleteBarber(@PathVariable Long barberId) {
		System.out.println("in delete barber " + barberId);
		return ResponseEntity.ok(adminService.deleteBarber(barberId));
	}
	
}
