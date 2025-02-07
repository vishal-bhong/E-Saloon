package com.app.dtos;

import java.time.LocalDate;

public class AdminResDTO extends UserResDTO{
	
	private String fullName;
	
	private String mobile;
	
	private LocalDate dob;

	private String address;
	
	public AdminResDTO(String fullName, String email, String mobile, LocalDate dob, String address) {
		super(email);
		this.fullName = fullName;
		this.mobile = mobile;
		this.dob = dob;
		this.address = address;
	}
}
