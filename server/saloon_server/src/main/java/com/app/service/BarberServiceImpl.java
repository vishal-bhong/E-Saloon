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
import com.app.dtos.ApiResponse;
import com.app.dtos.BarberReqDTO;
import com.app.dtos.BarberResDTO;
import com.app.entities.Barber;
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
	
	@Override
	public BarberResDTO getBarberById(Long barberId) {
		System.out.println(barberId);
		Barber barberEnt = barberRepository.findById(barberId)
				.orElseThrow(() -> new ResourceNotFoundException("Invalid Barber ID!!!"));

		BarberResDTO barberResDTO = modelMapper.map(barberEnt, BarberResDTO.class);
		
		return barberResDTO;
	}
	
	@Override
	public ApiResponse updateBarberDetails(BarberReqDTO dto, Long barberId) {
		String mesg = "barber Updation Failed - invalid barber ID";
		System.out.println(barberId);
		// validate
		Barber barberEnt = barberRepository.findById(barberId)
				.orElseThrow(() -> new ResourceNotFoundException("Invalid Category ID!!!"));
		// dto --> entity
		System.out.println(dto.getAddress());
		System.out.println(barberEnt.getAddress());
		
		modelMapper.map(dto, barberEnt);
		
		System.out.println(barberEnt.getAddress());
		
		barberRepository.save(barberEnt);
		mesg = "barber details updated !";
		return new ApiResponse(mesg);
	}
	
}
