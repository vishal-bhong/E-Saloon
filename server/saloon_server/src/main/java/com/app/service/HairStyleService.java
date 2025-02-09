package com.app.service;

import java.util.List;

import com.app.dtos.ApiResponse;
import com.app.dtos.HairStyleDTO;

public interface HairStyleService {
	public List<HairStyleDTO> getHairStylesByBarber(Long barberId);
	public ApiResponse addNewStyle(HairStyleDTO dto, Long barberId);
	
	public ApiResponse deleteHairStyle(Long barberId, Long hairStyleId);
}
