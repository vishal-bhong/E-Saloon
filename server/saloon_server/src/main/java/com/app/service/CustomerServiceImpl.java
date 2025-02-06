package com.app.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.CustomerDao;
import com.app.dtos.ApiResponse;
import com.app.dtos.CustomerReqDTO;
import com.app.dtos.CustomerResDTO;
import com.app.entities.Customer;

@Service
@Transactional
public class CustomerServiceImpl implements CustomerService {
	
	@Autowired
	private CustomerDao customerDao;
	
	@Autowired
	private ModelMapper modelMapper;

	@Override
	public ApiResponse registerCustomer(CustomerReqDTO dto) {
		//dto -> entity
		Customer transientCategory = 
				modelMapper.map(dto, Customer.class);
		Customer persistentCategory = customerDao
				.save(transientCategory);
		return new ApiResponse("Added new catgroy with ID " 
				+ persistentCategory.getId());
	}
}
