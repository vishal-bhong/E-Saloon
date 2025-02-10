package com.app.service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import org.springframework.security.crypto.password.PasswordEncoder;

import com.app.custom_exceptions.ApiException;
import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dtos.AdminResDTO;
import com.app.dtos.ApiResponse;
import com.app.dtos.BarberResCompleteDTO;
import com.app.dtos.BarberResDTO;
import com.app.dtos.CustomerAppointmentDTO;
import com.app.dtos.CustomerReqDTO;
import com.app.dtos.CustomerResDTO;
import com.app.entities.Admin;
import com.app.entities.Appointment;
import com.app.entities.AppointmentStatus;
import com.app.entities.Barber;
import com.app.entities.Customer;
import com.app.repository.AppointmentRepository;
import com.app.repository.BarberRepository;
import com.app.repository.CustomerRepository;

@Service
@Transactional
public class CustomerServiceImpl implements CustomerService {
	
	@Autowired
	private CustomerRepository customerRepository;
	
	@Autowired
	private BarberRepository barberRepository;
	
	@Autowired
	private AppointmentRepository appointmentRepository;
	
	@Autowired
	private ModelMapper modelMapper;
	
	@Autowired
	private PasswordEncoder passwordEncoder;

	@Override
	public ApiResponse registerCustomer(CustomerReqDTO dto) {
		//dto -> entity
		if (customerRepository.existsByEmail(dto.getEmail()))
			throw new ApiException("User email already exists!!!!");
		
		Customer transientCustomer = modelMapper.map(dto, Customer.class);
		
		transientCustomer.setPassword(passwordEncoder.encode(transientCustomer.getPassword()));
		
		Customer persistentCustomer = customerRepository.save(transientCustomer);
		
		return new ApiResponse("customer registered successfully");
	}
	
	@Override
	public CustomerResDTO getCustomerById(Long customerId) {
		System.out.println(customerId);
		Customer customerEnt = customerRepository.findById(customerId)
				.orElseThrow(() -> new ResourceNotFoundException("Invalid customer ID!!!"));

		CustomerResDTO customerResDTO = modelMapper.map(customerEnt, CustomerResDTO.class);
		System.out.println(customerResDTO);
		
		return customerResDTO;
	}
	
	@Override
	public List<BarberResDTO> getAllBarbers() {
		// map List<Category> --> List<CategoryRespDTO>
		return barberRepository.findAll() //List<Category>
				.stream() //Stream<Catgeory>
				.map(barber -> 
				modelMapper.map(barber, BarberResDTO.class))//Stream<resp dto>
				.collect(Collectors.toList());//List<dtos>
	}
	
	@Override
	public BarberResCompleteDTO getBarberWithStyles(Long barberId) {
		Barber barberEnt = 
				barberRepository.getBarberWithHairStyles(barberId)
				.orElseThrow(() -> 
				new ResourceNotFoundException("Invalid barber ID!!!"));
		//categoryEnt : persistent
		// entity -> dto
		return modelMapper.map(barberEnt, BarberResCompleteDTO.class);

	}
	
	@Override
	public ApiResponse bookAppointment(Long customerId, Long barberId) {
	    Customer customer = customerRepository.findById(customerId)
	            .orElseThrow(() -> new ResourceNotFoundException("Customer not found"));

	    Barber barber = barberRepository.findById(barberId)
	            .orElseThrow(() -> new ResourceNotFoundException("Barber not found"));

	    Appointment appointment = new Appointment();
	    appointment.setUserId(customer);
	    appointment.setBarberId(barber);
	    appointment.setAppointmentDate(LocalDate.now().plusDays(1));
	    appointment.setStatus(AppointmentStatus.PENDING);

	    appointmentRepository.save(appointment);
	    
	    return new ApiResponse("appointment booked...");
	    
	}
	
	@Override
	public List<CustomerAppointmentDTO> getCustomerAppointments(Long customerId) {
	    Customer customer = customerRepository.findById(customerId)
	            .orElseThrow(() -> new ResourceNotFoundException("Customer not found"));

	    List<Appointment> appointments = appointmentRepository.findByUserId_Id(customerId);

	    return appointments.stream()
	            .map(appointment -> new CustomerAppointmentDTO(
	                    appointment.getBarberId().getShopName(),
	                    appointment.getAppointmentDate(),
	                    appointment.getBarberId().getAddress(),
	                    appointment.getStatus()
	            ))
	            .collect(Collectors.toList());
	}


}
