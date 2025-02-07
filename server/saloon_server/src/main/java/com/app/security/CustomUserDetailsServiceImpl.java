package com.app.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.entities.Customer;
import com.app.entities.User;
import com.app.repository.AdminRepository;
import com.app.repository.BarberRepository;
import com.app.repository.CustomerRepository;

@Service
@Transactional
public class CustomUserDetailsServiceImpl implements UserDetailsService {

	@Autowired
	private CustomerRepository customerRepository;
	
	@Autowired
	private BarberRepository barberRepository;
	
	@Autowired
	private AdminRepository adminRepository;

	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
	    User user;
	    
	    if (adminRepository.findByEmail(email).isPresent()) {
	    	user = adminRepository.findByEmail(email).orElseThrow(() -> new UsernameNotFoundException("Email not found!"));
	    } 
	    else if (barberRepository.findByEmail(email).isPresent()) {
	    	user = barberRepository.findByEmail(email).orElseThrow(() -> new UsernameNotFoundException("Email not found!"));
	    } 
	    else {
	    	user = customerRepository.findByEmail(email).orElseThrow(() -> new UsernameNotFoundException("Email not found!"));
	    }
	    
	    return new CustomUserDetailsImpl(user);
	}

}
