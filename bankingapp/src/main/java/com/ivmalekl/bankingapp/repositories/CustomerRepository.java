package com.ivmalekl.bankingapp.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.ivmalekl.bankingapp.model.Account;
import com.ivmalekl.bankingapp.model.Customer;

@Repository
public interface CustomerRepository extends CrudRepository<Customer, Long>{
	List<Customer> findAll();
	List<Customer> findByFirstName(String name);
	List<Customer> findByLastName(String name);
	List<Customer> findByAge(int age);
	Optional<Customer> findById(Long id);
	
	Customer findByAccountListContaining(Optional<Account> account);
	
}
