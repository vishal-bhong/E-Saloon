package com.app.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import org.springframework.security.crypto.password.PasswordEncoder;

import com.app.custom_exceptions.ApiException;
import com.app.dtos.ApiResponse;
import com.app.dtos.CustomerReqDTO;
import com.app.dtos.CustomerResDTO;
import com.app.entities.Customer;
import com.app.repository.CustomerRepository;

@Service
@Transactional
public class CustomerServiceImpl implements CustomerService {
	
	@Autowired
	private CustomerRepository customerRepository;
	
	@Autowired
	private ModelMapper modelMapper;
	
	@Autowired
	private PasswordEncoder passwordEncoder;

	@Override
	public ApiResponse registerCustomer(CustomerReqDTO dto) {
		//dto -> entity
		if (customerRepository.existsByEmail(dto.getEmail()))
			throw new ApiException("User email already exists!!!!");
		
		Customer transientCustomer = modelMapper.map(dto, Customer.class);
		
		transientCustomer.setPassword(passwordEncoder.encode(transientCustomer.getPassword()));
		
		Customer persistentCustomer = customerRepository.save(transientCustomer);
		
		return new ApiResponse("customer registered successfully");
	}
}
