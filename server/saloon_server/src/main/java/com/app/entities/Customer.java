package com.app.entities;


import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;

import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@Entity 
@Table(name = "customers")
@NoArgsConstructor
@Getter
@Setter
@ToString(callSuper = true)
public class Customer extends User {

	@Column(name = "full_name", length = 20)
	private String fullName;
	
	@Column(length = 40, nullable = false)
	private String mobile;
	
	private LocalDate dob;

	@Column(length = 80)
	private String address;

	public Customer(String fullName, String email, String password, String mobile, LocalDate dob, String address) {
		super(email, password);
		this.fullName = fullName;
		this.mobile = mobile;
		this.dob = dob;
		this.address = address;
	}
}