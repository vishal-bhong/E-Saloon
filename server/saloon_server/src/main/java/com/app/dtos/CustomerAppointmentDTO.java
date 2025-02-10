package com.app.dtos;

import java.time.LocalDate;
import com.app.entities.AppointmentStatus;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class CustomerAppointmentDTO {
    private String shopName;
    private LocalDate appointmentDate;
    private String barberAddress;
    private AppointmentStatus appointmentStatus;

    public CustomerAppointmentDTO(String shopName, LocalDate appointmentDate, String barberAddress, AppointmentStatus appointmentStatus) {
        this.shopName = shopName;
        this.appointmentDate = appointmentDate;
        this.barberAddress = barberAddress;
        this.appointmentStatus = appointmentStatus;
    }
}
