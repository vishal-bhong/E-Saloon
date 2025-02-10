package com.app.dtos;

import java.time.LocalDate;

import com.app.entities.AppointmentStatus;

public class AppointmentDTO extends BaseDTO {
	private LocalDate appointmentDate;
	
	private AppointmentStatus status;
	
    public AppointmentDTO(LocalDate appointmentDate, AppointmentStatus status) {
    	super();
        this.appointmentDate = appointmentDate;
        this.status = status;
    }
}
