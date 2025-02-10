package com.app.entities;

import java.time.LocalDate;

import jakarta.persistence.*;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "appointments")
@NoArgsConstructor
@Getter
@Setter
@ToString(callSuper = true)
public class Appointment extends BaseEntity {

    @ManyToOne
    @JoinColumn(name = "customer_id", nullable = false)
    private Customer userId;

    @ManyToOne
    @JoinColumn(name = "barber_id", nullable = false)
    private Barber barberId;

    @Column(name = "appointment_date", nullable = false)
    private LocalDate appointmentDate = LocalDate.now().plusDays(1); // Defaults to tomorrow's date

    @Enumerated(EnumType.STRING)
    @Column(length = 10, nullable = false)
    private AppointmentStatus status = AppointmentStatus.PENDING; // Default status

    public Appointment(Customer userId, Barber barberId, LocalDate appointmentDate, AppointmentStatus status) {
        this.userId = userId;
        this.barberId = barberId;
        this.appointmentDate = appointmentDate;
        this.status = status;
    }

}
