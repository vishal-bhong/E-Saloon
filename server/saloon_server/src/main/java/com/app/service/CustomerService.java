package com.app.service;

import java.util.List;

import com.app.dtos.ApiResponse;
import com.app.dtos.BarberResCompleteDTO;
import com.app.dtos.BarberResDTO;
import com.app.dtos.CustomerAppointmentDTO;
import com.app.dtos.CustomerReqDTO;
import com.app.dtos.CustomerResDTO;

public interface CustomerService {
	
	ApiResponse registerCustomer(CustomerReqDTO dto);
	public CustomerResDTO getCustomerById(Long customerId);
	
	public List<BarberResDTO> getAllBarbers();
	public BarberResCompleteDTO getBarberWithStyles(Long barberId);
	
	ApiResponse bookAppointment(Long customerId, Long barberId);
	
	List<CustomerAppointmentDTO> getCustomerAppointments(Long customerId);

}
