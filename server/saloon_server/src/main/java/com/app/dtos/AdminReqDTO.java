package com.app.dtos;

import java.time.LocalDate;

import jakarta.persistence.Column;

public class AdminReqDTO extends UserReqDTO{

	private String fullName;
	
	private String mobile;
	
	private LocalDate dob;

	private String address;
	
	public AdminReqDTO(String fullName, String email, String password, String mobile, LocalDate dob, String address) {
		super(email, password);
		this.fullName = fullName;
		this.mobile = mobile;
		this.dob = dob;
		this.address = address;
	}
}
