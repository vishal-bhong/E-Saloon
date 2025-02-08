package com.app.dtos;

import java.time.LocalDate;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@Getter
@Setter
@ToString(callSuper = true)
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
