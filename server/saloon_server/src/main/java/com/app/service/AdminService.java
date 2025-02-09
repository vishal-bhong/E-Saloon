package com.app.service;

import java.util.List;

import com.app.dtos.AdminReqDTO;
import com.app.dtos.AdminResDTO;
import com.app.dtos.ApiResponse;
import com.app.dtos.BarberResDTOForAdminPanel;
import com.app.dtos.CustomerResDTO;

public interface AdminService {
	
	public ApiResponse registerAdmin(AdminReqDTO dto);
	public AdminResDTO getAdminById(Long adminId);
	
	public List<CustomerResDTO> getAllCustomers();
	public ApiResponse deleteCustomer(Long customerId);
	
	public List<BarberResDTOForAdminPanel> getAllBarbers();
	public ApiResponse deleteBarber(Long barberId);
}
