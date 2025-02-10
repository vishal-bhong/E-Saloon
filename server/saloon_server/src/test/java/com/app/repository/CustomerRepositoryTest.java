package com.app.repository;

import static org.junit.jupiter.api.Assertions.*;

import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import com.app.entities.Customer;

@DataJpaTest // Unit testing for DAO layer, starts DAO layer spring beans + entities
@AutoConfigureTestDatabase(replace = Replace.NONE) // Uses real database instead of in-memory
class CustomerRepositoryTest {

    @Autowired
    private CustomerRepository customerRepository;

    @Test
    void testFindByEmail() {

        // When
        Optional<Customer> foundCustomer = customerRepository.findByEmail("vishal@test.com");

        // Then
        assertTrue(foundCustomer.isPresent());
        assertEquals("John Doe", foundCustomer.get().getFullName());
    }

    @Test
    void testExistsByEmail() {

        // When
        boolean exists = customerRepository.existsByEmail("vishal@test.com");

        // Then
        assertTrue(exists);
    }
    
}
