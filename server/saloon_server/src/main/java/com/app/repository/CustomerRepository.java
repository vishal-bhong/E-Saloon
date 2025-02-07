package com.app.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entities.Customer;

@Repository
public interface CustomerRepository extends JpaRepository<Customer,Long> {
	
	Optional<Customer> findByEmail(String email);
	boolean existsByEmail(String email);
}
