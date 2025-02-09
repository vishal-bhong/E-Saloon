package com.app.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import com.app.custom_exceptions.ApiException;
import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dtos.ApiResponse;
import com.app.dtos.HairStyleDTO;
import com.app.entities.Barber;
import com.app.entities.HairStyle;
import com.app.repository.BarberRepository;
import com.app.repository.HairStyleRepository;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class HairStyleServiceImpl implements HairStyleService {

	@Autowired
	private ModelMapper modelMapper;
	
	@Autowired
	private HairStyleRepository hairStyleRepository;
	
	@Autowired
	private BarberRepository barberRepository;
	
	
	@Override
	public List<HairStyleDTO> getHairStylesByBarber(Long barberId) {
		return hairStyleRepository.findByStylesOfBarber_Id(barberId)
		.stream()
		.map(hairStyle -> modelMapper.map(hairStyle, HairStyleDTO.class))
		.collect(Collectors.toList());
		
	}
	
	@Override
	public ApiResponse addNewStyle(HairStyleDTO dto, Long barberId) {
		//1. get Blogger from its id
		Barber barber=barberRepository.findById(barberId).
				orElseThrow(() -> new ResourceNotFoundException("Blogger id invalid!!"));
		

		//3. map dto --> entity
		HairStyle hairStyleEnt = modelMapper.map(dto, HairStyle.class);
		//4. Category  1<---->* BlogPost
		barber.addHairStyle(hairStyleEnt);
		
		//BlogPost *--->1 Blogger(User)
		hairStyleEnt.setStylesOfBarber(barber);
		
		//5. save
		//blogPostDao.save(blogPostEnt);not required since cascadeType.ALL
		return new ApiResponse("new style added...");
	}
	
	public ApiResponse deleteHairStyle(Long barberId, Long hairStyleId) {
		String mesg = "removing style failed";
		
		Barber barber = barberRepository.findById(barberId).
				orElseThrow(() -> new ResourceNotFoundException("barber id invalid!!"));
		
		HairStyle hairStyle = hairStyleRepository.findById(hairStyleId).
				orElseThrow(() -> new ResourceNotFoundException("hair style id invalid!!"));
		
		barber.removeHairStyle(hairStyle);
		mesg="hair style removed successfully...";
		return new ApiResponse(mesg);
	}

	
}

        
