package com.app.dtos;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@Getter
@Setter
@ToString(callSuper = true)
public class UserResDTO extends BaseDTO {
	private String email;
	
	public UserResDTO(String email) {
		super();
		this.email = email;
	}
}
