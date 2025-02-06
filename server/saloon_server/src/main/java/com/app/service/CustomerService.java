package com.app.service;

import com.app.dtos.ApiResponse;
import com.app.dtos.CustomerReqDTO;
import com.app.dtos.CustomerResDTO;

public interface CustomerService {
	
	ApiResponse registerCustomer(CustomerReqDTO dto);
}
