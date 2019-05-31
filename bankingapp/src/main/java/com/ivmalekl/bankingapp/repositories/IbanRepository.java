package com.ivmalekl.bankingapp.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.ivmalekl.bankingapp.model.Iban;

@Repository
public interface IbanRepository extends CrudRepository<Iban, Long> {
	List<Iban> findAll();
	Optional<Iban> findByValue(String value);
}
