package com.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entities.HairStyle;

@Repository
public interface HairStyleRepository extends JpaRepository<HairStyle,Long>{
	List<HairStyle> findByStylesOfBarber_Id(Long barberId);

}
