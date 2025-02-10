package com.app.dtos;

import java.time.LocalDate;

import com.app.entities.AppointmentStatus;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class BarberAppointmentDTO {
	private Long Id;
    private String customerName;
    private String customerAddress;
    private String customerMobile;
    private String customerEmail;
    private LocalDate appointmentDate;
    private AppointmentStatus appointmentStatus;
}
