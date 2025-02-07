package com.app.security;

import java.security.Key;
import java.util.Collection;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.stereotype.Component;

import com.app.entities.Admin;
import com.app.entities.Barber;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import jakarta.annotation.PostConstruct;
import lombok.extern.slf4j.Slf4j;

@Component
@Slf4j
public class JwtUtils {

	@Value("${spring.security.jwt.secret.key}")
	private String jwtSecret;

	@Value("${spring.security.jwt.exp.time}")
	private int jwtExpirationMs;
	
	
	private Key key;

	@PostConstruct
	public void init() {
		key = Keys.hmacShaKeyFor(jwtSecret.getBytes());
	}

	public String generateJwtToken(Authentication authentication) {
		log.info("generate jwt token " + authentication);
		
		CustomUserDetailsImpl UserPrincipal = (CustomUserDetailsImpl) authentication.getPrincipal();
		
		String userType;
		
		if (UserPrincipal.getUser() instanceof Admin) {
		userType = "ADMIN";
		} else if (UserPrincipal.getUser() instanceof Barber) {
		userType = "BARBER";
		} else {
		userType = "CUSTOMER";
		}
		    

		return Jwts.builder()
				.setSubject((UserPrincipal.getUsername()))
				
				.setIssuedAt(new Date())
				.setExpiration(new Date((new Date()).getTime() + jwtExpirationMs))
				
				.claim("authorities", getAuthoritiesInString(UserPrincipal.getAuthorities()))
				
				.claim("userType", userType)
				
				.claim("user_id",UserPrincipal.getUser().getId())
		
				.signWith(key, SignatureAlgorithm.HS512)

				.compact();
	}


	public String getUserNameFromJwtToken(Claims claims) {
		return claims.getSubject();
	}
	
	public String getUserTypeFromJwtToken(Claims claims) {
	    return claims.get("userType", String.class);
	}

	public Claims validateJwtToken(String jwtToken) {
		Claims claims = Jwts.parserBuilder()
				.setSigningKey(key)
				.build()
				.parseClaimsJws(jwtToken)
				.getBody();

		return claims;		
	}

	private String getAuthoritiesInString(Collection<? extends GrantedAuthority> authorities) {
		String authorityString = authorities.stream()
				.map(authority -> authority.getAuthority())
				.collect(Collectors.joining(","));
		System.out.println(authorityString);
		return authorityString;
	}
	
	
	public List<GrantedAuthority> getAuthoritiesFromClaims(Claims claims) {
		
		String authString = (String) claims.get("authorities");
		List<GrantedAuthority> authorities = AuthorityUtils.commaSeparatedStringToAuthorityList(authString);
		authorities.forEach(System.out::println);
		return authorities;
	}
	
	
	
	public Long getUserIdFromJwtToken(Claims claims) {
		
			return Long.valueOf((int)claims.get("user_id"));			
	}
			
	
	public Authentication populateAuthenticationTokenFromJWT(String jwt) {

				Claims payloadClaims = validateJwtToken(jwt);

				String email = getUserNameFromJwtToken(payloadClaims);

				List<GrantedAuthority> authorities = getAuthoritiesFromClaims(payloadClaims);
	
				Long userId = getUserIdFromJwtToken(payloadClaims);
				String userType = getUserTypeFromJwtToken(payloadClaims);

				UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(email, userId, authorities);
				token.setDetails(userType);
				
				System.out.println("is authenticated "+token.isAuthenticated());//true
				return token;
			}

}
