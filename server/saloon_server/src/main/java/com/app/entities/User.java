package com.app.entities;


import jakarta.persistence.*;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@Getter
@Setter
@ToString(callSuper = true, exclude = { "password" })
@MappedSuperclass
public class User extends BaseEntity{
	
	@Column(length = 40, unique = true) 
	private String email;
	
	@Column(length = 500, nullable = false)
	private String password;
	
	
	public User(String email, String password) {
		super();
		this.email = email;
		this.password = password;
	}

}

