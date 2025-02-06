package com.app.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.CustomerDao;
import com.app.entities.Customer;

@Service
@Transactional
public class CustomCustomerDetailsServiceImpl implements UserDetailsService {

	@Autowired
	private CustomerDao customerDao;

	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		Customer customer = customerDao.findByEmail(email)
				.orElseThrow(() -> new UsernameNotFoundException("Email not found !!!!!"));
		return new CustomCustomerDetailsImpl(customer);
	}

}
