package com.app.service;

import java.util.List;

import com.app.dtos.ApiResponse;
import com.app.dtos.BarberAppointmentDTO;
import com.app.dtos.BarberReqDTO;
import com.app.dtos.BarberResDTO;

public interface BarberService {

	ApiResponse registerBarber(BarberReqDTO dto);
	
	public BarberResDTO getBarberById(Long barberId);
	public ApiResponse updateBarberDetails(BarberReqDTO dto, Long barberId);
	
	List<BarberAppointmentDTO> getBarberAppointments(Long barberId);
	
	ApiResponse updateAppointmentStatus(Long appointmentId, String status);

}
