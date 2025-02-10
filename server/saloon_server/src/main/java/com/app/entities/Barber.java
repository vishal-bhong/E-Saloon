package com.app.entities;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Lob;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@Entity 
@Table(name = "barbers")
@NoArgsConstructor
@Getter
@Setter
@ToString(callSuper = true)
public class Barber extends User {

	@Column(name = "shop_name", length = 50)
	private String shopName;
	
	@Column(length = 40, nullable = false)
	private String mobile;

	@Column(length = 150)
	private String address;
	
	@Lob
	private String description;
	
	@Lob // => large object , Mysql - uses longblob
	private String shopImg;
	
	@OneToMany(mappedBy = "stylesOfBarber", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<HairStyle> hairStyles = new ArrayList<>();
	
	
    @OneToMany(mappedBy = "barberId", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Appointment> appointments = new ArrayList<>();

	public Barber(String shopName, String email, String password, String mobile, String address, String description, String shopImg) {
		super(email, password);
		this.shopName = shopName;
		this.mobile = mobile;
		this.address = address;
		this.description = description;
		this.shopImg = shopImg;
	}
	
	// helper methods to add n remove child entity
	public void addHairStyle(HairStyle style) {
		this.hairStyles.add(style);
		style.setStylesOfBarber(this);
	}

	public void removeHairStyle(HairStyle style) {
		this.hairStyles.remove(style);
		style.setStylesOfBarber(null);
	}
	
	
    // Helper methods for Appointments
    public void addAppointment(Appointment appointment) {
        this.appointments.add(appointment);
        appointment.setBarberId(this);
    }

    public void removeAppointment(Appointment appointment) {
        this.appointments.remove(appointment);
        appointment.setBarberId(null);
    }
	
}