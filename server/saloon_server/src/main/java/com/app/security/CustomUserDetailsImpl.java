package com.app.security;

import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.app.entities.Admin;
import com.app.entities.Barber;
import com.app.entities.Customer;
import com.app.entities.User;

public class CustomUserDetailsImpl implements UserDetails {
		
	private User user;
	

	public CustomUserDetailsImpl(User user) {
		super();
		this.user = user;
	}
	
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		// TODO Auto-generated method stub
	        String role;
	        if (user instanceof Admin) {
	            role = "ROLE_ADMIN";
	        } else if (user instanceof Barber) {
	            role = "ROLE_BARBER";
	        } else {
	            role = "ROLE_CUSTOMER";
	        }
	        return List.of(new SimpleGrantedAuthority(role));
	}


	@Override
	public String getPassword() {
		// TODO Auto-generated method stub
		return user.getPassword();
	}

	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return user.getEmail();
	}

	public User getUser() {
		return user;
	}
	

}
