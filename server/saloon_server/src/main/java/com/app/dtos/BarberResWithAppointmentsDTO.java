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
public class BarberResWithAppointmentsDTO extends UserResDTO {

    private String shopName;
    private String mobile;
    private String address;
    private String description;
    private String shopImg;
    private List<AppointmentDTO> appointments;

    public BarberResWithAppointmentsDTO(String shopName, String email, String mobile, String address, String description, String shopImg, List<AppointmentDTO> appointments) {
        super(email);
        this.shopName = shopName;
        this.mobile = mobile;
        this.address = address;
        this.description = description;
        this.shopImg = shopImg;
        this.appointments = appointments;
    }
}
