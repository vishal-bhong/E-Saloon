package com.app.dtos;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@NoArgsConstructor
@Getter
@Setter
@ToString(callSuper = true)
public class BarberResDTO extends UserResDTO {

	private String shopName;
	
	private String mobile;
	
	private String address;

	private String description;
	
	private String shopImg;

	public BarberResDTO(String shopName, String email, String mobile, String address, String description, String shopImg) {
		super(email);
		this.shopName = shopName;
		this.mobile = mobile;
		this.address = address;
		this.description = description;
		this.shopImg = shopImg;
	}
}