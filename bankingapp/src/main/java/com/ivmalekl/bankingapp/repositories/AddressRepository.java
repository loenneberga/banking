package com.ivmalekl.bankingapp.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.ivmalekl.bankingapp.model.Address;

@Repository
public interface AddressRepository extends CrudRepository<Address, Long> {
	List<Address> findAll();
	Optional<Address> findById(Long id);
	List<Address> findByStreet(String street);
}
