package com.app.dtos;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@Getter
@Setter
@ToString(callSuper = true)
public class BarberResDTOForAdminPanel extends UserResDTO{
	private String shopName;
	
	private String mobile;
	
	private String address;
	

	public BarberResDTOForAdminPanel(String shopName, String email, String mobile, String address) {
		super(email);
		this.shopName = shopName;
		this.mobile = mobile;
		this.address = address;
	}
}
