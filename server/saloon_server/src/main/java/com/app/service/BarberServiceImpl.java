package com.app.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_exceptions.ApiException;
import com.app.dtos.ApiResponse;
import com.app.dtos.BarberReqDTO;
import com.app.dtos.CustomerReqDTO;
import com.app.entities.Barber;
import com.app.entities.Customer;
import com.app.repository.BarberRepository;

@Service
@Transactional
public class BarberServiceImpl implements BarberService {

	@Autowired
	private BarberRepository barberRepository;
	
	@Autowired
	private ModelMapper modelMapper;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Override
	public ApiResponse registerBarber(BarberReqDTO dto) {
		//dto -> entity
		if (barberRepository.existsByEmail(dto.getEmail()))
			throw new ApiException("User email already exists!!!!");
		
		Barber transientBarber = modelMapper.map(dto, Barber.class);
		
		transientBarber.setPassword(passwordEncoder.encode(transientBarber.getPassword()));
		
		Barber persistentBarber = barberRepository.save(transientBarber);
		
		return new ApiResponse("barber registered successfully");
	}
}
