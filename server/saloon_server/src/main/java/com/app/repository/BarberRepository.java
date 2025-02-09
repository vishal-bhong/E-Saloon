package com.app.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.app.entities.Barber;

@Repository
public interface BarberRepository extends JpaRepository<Barber,Long>{

	Optional<Barber> findByEmail(String email);
	boolean existsByEmail(String email);
	
	@Query("select c from Barber c join fetch c.hairStyles where c.id=:barberId")
	Optional<Barber> getBarberWithHairStyles(Long barberId);
}
