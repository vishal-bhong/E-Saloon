package com.app.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Lob;

import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@Entity 
@Table(name = "barbers")
@NoArgsConstructor
@Getter
@Setter
@ToString(callSuper = true)
public class Barber extends User {

	@Column(name = "shop_name", length = 50)
	private String shopName;
	
	@Column(length = 40, nullable = false)
	private String mobile;

	@Column(length = 150)
	private String address;
	
	@Lob
	private String description;
	
	@Lob // => large object , Mysql - uses longblob
	private String shopImg;

	public Barber(String shopName, String email, String password, String mobile, String address, String description, String shopImg) {
		super(email, password);
		this.shopName = shopName;
		this.mobile = mobile;
		this.address = address;
		this.description = description;
		this.shopImg = shopImg;
	}
}