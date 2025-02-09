package com.app.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity 
@Table(name = "styles")
@NoArgsConstructor
@Getter
@Setter
@ToString(callSuper = true,exclude = {"stylesOfBarber"})
public class HairStyle extends BaseEntity {
	
	@Column(unique = true, length = 30)
	private String style;

	@Column(length = 500)
	private String price;
	
	@ManyToOne
	@JoinColumn(name = "barber_id",nullable = false)
	private Barber stylesOfBarber;
	
	public HairStyle(String style, String price) {
		super();
		this.style = style;
		this.price = price;
	}
	
}
