package com.app.dtos;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@Getter
@Setter
@ToString(callSuper = true)
public class HairStyleDTO extends BaseDTO {

	@NotBlank(message = "style is required")
	private String style;

	private String price;
	
	public HairStyleDTO(String style, String price) {
		super();
		this.style = style;
		this.price = price;
	}
}
