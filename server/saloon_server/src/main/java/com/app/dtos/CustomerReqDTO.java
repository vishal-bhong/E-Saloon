package com.app.dtos;

import java.time.LocalDate;

import jakarta.persistence.Column;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@Getter
@Setter
@ToString(callSuper = true)
public class CustomerReqDTO extends UserReqDTO {

	private String fullName;
	
	private String mobile;
	
	private LocalDate dob;

	private String address;

	public CustomerReqDTO(String fullName, String email, String password, String mobile, LocalDate dob, String address) {
		super(email, password);
		this.fullName = fullName;
		this.mobile = mobile;
		this.dob = dob;
		this.address = address;
	}
}
	