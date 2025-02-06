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

@Configuration //equivalent to bean config xml
@EnableWebSecurity //to enable annotation support for spring sec
public class SecurityConfiguration {
	@Autowired
	private PasswordEncoder passwordEncoder;
	@Autowired
	private CustomJWTAuthenticationFilter customJWTAuthenticationFilter;
	
	// Configure the bean to customize spring security filter chain
		@Bean
		public SecurityFilterChain authorizeRequests(HttpSecurity http) throws Exception
		{
			//1. Disable CSRF filter
			http.csrf(customizer -> customizer.disable())
			//2. configure URL based access
	        .authorizeHttpRequests
	        (request -> 
	        request.requestMatchers("/customers/register",
	        		"/customers/signin","/customer/**").permitAll() 
	        //required explicitly for JS clients (eg React app - to permit pre flight requests)
	        .requestMatchers(HttpMethod.OPTIONS).permitAll()
	        	
	       .requestMatchers("/customer/**")
	       .hasRole("customer")       		
	       .anyRequest().authenticated())  
	  //      .httpBasic(Customizer.withDefaults()) - replacing it by custom JWT filter
	        .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS));

			http.addFilterBefore(customJWTAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);
	        return http.build();
		}

		@Bean
		public AuthenticationManager authenticationManager
		(AuthenticationConfiguration config) throws Exception
		{
			return config.getAuthenticationManager();
		}

}
