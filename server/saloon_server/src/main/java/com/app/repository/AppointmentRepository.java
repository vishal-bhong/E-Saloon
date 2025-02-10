package com.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entities.Appointment;

@Repository
public interface AppointmentRepository extends JpaRepository<Appointment, Long> {

    // Fetch all appointments for a given Barber
    List<Appointment> findByBarberId_Id(Long barberId);

    // Fetch all appointments for a given Customer
    List<Appointment> findByUserId_Id(Long customerId);
}
