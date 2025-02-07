package com.app.dtos;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@Getter
@Setter
@ToString(callSuper = true, exclude = { "password" })
public class UserReqDTO {

    @NotBlank(message = "Email is required")
    @Email(message = "Invalid email format")
	private String email;
	
    
    @NotBlank(message = "Password is required")
    @Size(min = 6, max = 20, message = "Password must be between 6 and 20 characters")
	private String password;
	
	
	public UserReqDTO(String email, String password) {
		super();
		this.email = email;
		this.password = password;
	}
}
