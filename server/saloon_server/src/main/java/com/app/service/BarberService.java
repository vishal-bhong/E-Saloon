package com.app.service;

import com.app.dtos.ApiResponse;
import com.app.dtos.BarberReqDTO;
import com.app.dtos.BarberResDTO;

public interface BarberService {

	ApiResponse registerBarber(BarberReqDTO dto);
	
	public BarberResDTO getBarberById(Long barberId);
	public ApiResponse updateBarberDetails(BarberReqDTO dto, Long barberId);
}
