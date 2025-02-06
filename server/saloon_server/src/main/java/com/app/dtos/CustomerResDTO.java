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
public class CustomerResDTO extends BaseDTO {
	private String fullName;

	private String email;
	
	
	private String mobile;
	
	private LocalDate dob;

	private String address;

	public CustomerResDTO(String fullName, String email, String mobile, LocalDate dob, String address) {
		super();
		this.fullName = fullName;
		this.email = email;
		this.mobile = mobile;
		this.dob = dob;
		this.address = address;
	}
}
