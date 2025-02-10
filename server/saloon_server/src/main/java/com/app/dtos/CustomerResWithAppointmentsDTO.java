package com.app.dtos;

import java.util.List;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@Getter
@Setter
@ToString(callSuper = true)
public class CustomerResWithAppointmentsDTO extends UserResDTO {

    private String fullName;
    
    private String mobile;
    
    private String address;
    
    private List<AppointmentDTO> appointments;

    public CustomerResWithAppointmentsDTO(String fullName, String email, String mobile, String address, List<AppointmentDTO> appointments) {
        super(email);
        this.fullName = fullName;
        this.mobile = mobile;
        this.address = address;
        this.appointments = appointments;
    }
}
