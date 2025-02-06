package com.app.dtos;

import java.time.LocalDate;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@Getter
@Setter
@ToString
public class CustomerReqDTO {

	private String fullName;

	private String email;
	
	private String password;
	
	private String mobile;
	
	private LocalDate dob;

	private String address;

	public CustomerReqDTO(String fullName, String email, String password, String mobile, LocalDate dob, String address) {
		super();
		this.fullName = fullName;
		this.email = email;
		this.password = password;
		this.mobile = mobile;
		this.dob = dob;
		this.address = address;
	}
}
	