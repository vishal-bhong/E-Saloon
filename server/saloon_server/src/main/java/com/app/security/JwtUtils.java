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
		
		CustomCustomerDetailsImpl CustomerPrincipal = (CustomCustomerDetailsImpl) authentication.getPrincipal();
		

		return Jwts.builder()
				.setSubject((CustomerPrincipal.getUsername()))
				
				.setIssuedAt(new Date())
				.setExpiration(new Date((new Date()).getTime() + jwtExpirationMs))
				
				.claim("authorities", getAuthoritiesInString(CustomerPrincipal.getAuthorities()))

				.claim("customer_id",CustomerPrincipal.getCustomer().getId())
		
				.signWith(key, SignatureAlgorithm.HS512)

				.compact();
	}


	public String getUserNameFromJwtToken(Claims claims) {
		return claims.getSubject();
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
		String authorityString = authorities.stream().
				map(authority -> authority.getAuthority())
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
	
	
	
	public Long getCustomerIdFromJwtToken(Claims claims) {
		
			return Long.valueOf((int)claims.get("customer_id"));			
	}
			
	
	public Authentication populateAuthenticationTokenFromJWT(String jwt) {

				Claims payloadClaims = validateJwtToken(jwt);

				String email = getUserNameFromJwtToken(payloadClaims);

				List<GrantedAuthority> authorities = getAuthoritiesFromClaims(payloadClaims);
	
				Long userId = getCustomerIdFromJwtToken(payloadClaims);

				UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(email, userId, authorities);
				System.out.println("is authenticated "+token.isAuthenticated());//true
				return token;
			}

}
