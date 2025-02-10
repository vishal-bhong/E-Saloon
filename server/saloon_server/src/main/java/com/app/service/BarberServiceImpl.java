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
import com.app.dtos.BarberAppointmentDTO;
import com.app.dtos.BarberReqDTO;
import com.app.dtos.BarberResDTO;
import com.app.entities.Appointment;
import com.app.entities.AppointmentStatus;
import com.app.entities.Barber;
import com.app.repository.AppointmentRepository;
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
	
	@Autowired
	private AppointmentRepository appointmentRepository;
	
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
	
	
	@Override
	public List<BarberAppointmentDTO> getBarberAppointments(Long barberId) {
	    Barber barber = barberRepository.findById(barberId)
	            .orElseThrow(() -> new ResourceNotFoundException("Barber not found"));

	    List<Appointment> appointments = appointmentRepository.findByBarberId_Id(barberId);

	    return appointments.stream()
	            .map(appointment -> new BarberAppointmentDTO(
	            		appointment.getId(),
	                    appointment.getUserId().getFullName(),
	                    appointment.getUserId().getAddress(),
	                    appointment.getUserId().getMobile(),
	                    appointment.getUserId().getEmail(),
	                    appointment.getAppointmentDate(),
	                    appointment.getStatus()
	            ))
	            .collect(Collectors.toList());
	}
	
	
	@Override
	public ApiResponse updateAppointmentStatus(Long appointmentId, String status) {
	    Appointment appointment = appointmentRepository.findById(appointmentId)
	            .orElseThrow(() -> new ResourceNotFoundException("Appointment not found"));

	    AppointmentStatus newStatus = AppointmentStatus.valueOf(status.toUpperCase());
	    appointment.setStatus(newStatus);
	    appointmentRepository.save(appointment);
	    return new ApiResponse("Status updated....");
	}


	
}
