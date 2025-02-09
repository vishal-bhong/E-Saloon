package com.app.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class SecurityConfiguration {
	@Autowired
	private PasswordEncoder passwordEncoder;
	@Autowired
	private CustomJWTAuthenticationFilter customJWTAuthenticationFilter;
	

		@Bean
		public SecurityFilterChain authorizeRequests(HttpSecurity http) throws Exception
		{
			//1. Disable CSRF filter
			http.csrf(customizer -> customizer.disable())
			//2. configure URL based access
	        .authorizeHttpRequests(request -> 
	        
	        request.requestMatchers("/customers/register", "/signout", "/customer/**",
	        						"/barber/register",
	        						"/admin/register", "/signin", "/logout").permitAll() 

	        //required explicitly for JS clients (eg React app - to permit pre flight requests)
	        .requestMatchers(HttpMethod.OPTIONS).permitAll()
	        .requestMatchers("/admin/**").hasRole("ADMIN")
	       .requestMatchers("/barber/**").hasRole("BARBER")
	       .requestMatchers("/customers/**", "/api/payment/**").hasRole("CUSTOMER")      		
	       .anyRequest().authenticated())  
	  //      .httpBasic(Customizer.withDefaults()) - replacing it by custom JWT filter
	        .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS));

			http.addFilterBefore(customJWTAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);
	        return http.build();
		}

		@Bean
		public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception
		{
			return config.getAuthenticationManager();
		}

		// now can access userType in controllers as 

//		public class CustomerController {
//
//		    @GetMapping("/profile")
//		    public ResponseEntity<?> getCustomerProfile(Authentication authentication) {
//		        CustomUserDetailsImpl userDetails = (CustomUserDetailsImpl) authentication.getPrincipal();
//		        String userType = (String) authentication.getDetails();
//
//		        if (!"CUSTOMER".equals(userType)) {
//		            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Access Denied");
//		        }
//
//		        Customer customer = (Customer) userDetails.getUser();
//		        // Return customer profile details
//		        return ResponseEntity.ok(customer);
//		    }
//		}

}
