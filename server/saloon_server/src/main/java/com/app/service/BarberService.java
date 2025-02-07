package com.app.service;

import com.app.dtos.ApiResponse;
import com.app.dtos.BarberReqDTO;

public interface BarberService {

	ApiResponse registerBarber(BarberReqDTO dto);
}
