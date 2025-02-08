package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dtos.ApiResponse;
import com.app.dtos.BarberReqDTO;
import com.app.service.BarberService;

@RestController
@RequestMapping("/barber")
@CrossOrigin(origins = "http://localhost:3000")
public class BarberController {
	
	@Autowired
	private BarberService barberService;
	

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
}
