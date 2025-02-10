package com.app.entities;


import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@Entity 
@Table(name = "customers")
@NoArgsConstructor
@Getter
@Setter
@ToString(callSuper = true)
public class Customer extends User {

	@Column(name = "full_name", length = 20)
	private String fullName;
	
	@Column(length = 40, nullable = false)
	private String mobile;
	
	private LocalDate dob;

	@Column(length = 80)
	private String address;
	
	@OneToMany(mappedBy = "userId", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Appointment> appointments = new ArrayList<>();

	public Customer(String fullName, String email, String password, String mobile, LocalDate dob, String address) {
		super(email, password);
		this.fullName = fullName;
		this.mobile = mobile;
		this.dob = dob;
		this.address = address;
	}
	
	
    // Helper methods to add and remove appointments
    public void addAppointment(Appointment appointment) {
        this.appointments.add(appointment);
        appointment.setUserId(this);
    }

    public void removeAppointment(Appointment appointment) {
        this.appointments.remove(appointment);
        appointment.setUserId(null);
    }
}