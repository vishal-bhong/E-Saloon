package com.app.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_exceptions.ApiException;
import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dtos.AdminReqDTO;
import com.app.dtos.AdminResDTO;
import com.app.dtos.ApiResponse;
import com.app.dtos.CustomerResDTO;
import com.app.entities.Admin;
import com.app.repository.AdminRepository;
import com.app.repository.CustomerRepository;

@Service
@Transactional
public class AdminServiceImpl implements AdminService {
	@Autowired
	private AdminRepository adminRepository;
	
	@Autowired
	private CustomerRepository customerRepository;
	
	@Autowired
	private ModelMapper modelMapper;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Override
	public ApiResponse registerAdmin(AdminReqDTO dto) {
		//dto -> entity
		if (adminRepository.existsByEmail(dto.getEmail()))
			throw new ApiException("Admin email already exists!!!!");
		
		Admin transientAdmin = modelMapper.map(dto, Admin.class);
		
		transientAdmin.setPassword(passwordEncoder.encode(transientAdmin.getPassword()));
		
		Admin persistentAdmin = adminRepository.save(transientAdmin);
		
		return new ApiResponse("Admin registered successfully");
	}
	
	@Override
	public AdminResDTO getAdminById(Long adminId) {
		System.out.println(adminId);
		Admin adminEnt = adminRepository.findById(adminId)
				.orElseThrow(() -> new ResourceNotFoundException("Invalid Admin ID!!!"));

		AdminResDTO adminResDTO = modelMapper.map(adminEnt, AdminResDTO.class);
		System.out.println(adminResDTO);
		
		return adminResDTO;
	}
	
	@Override
	public List<CustomerResDTO> getAllCustomers() {
		// map List<Category> --> List<CategoryRespDTO>
		return customerRepository.findAll() //List<Category>
				.stream() //Stream<Catgeory>
				.map(customer -> 
				modelMapper.map(customer, 
						CustomerResDTO.class))//Stream<resp dto>
				.collect(Collectors.toList());//List<dtos>
	}
	
	@Override
	public ApiResponse deleteCustomer(Long customerId) {
		String mesg = "Invalid Customer ID !!!!!";
		if (customerRepository.existsById(customerId)) {
			customerRepository.deleteById(customerId);
			mesg = "Deleted customer...";
		}
		return new ApiResponse(mesg);
	}
	
}
