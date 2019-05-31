package com.ivmalekl.bankingapp.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.ivmalekl.bankingapp.model.Account;
import com.ivmalekl.bankingapp.model.Iban;

@Repository
public interface AccountRepository extends CrudRepository<Account, Long> {
	List<Account> findAll();
	Optional<Account> findById(Long id);
	Optional<Account> findByIban(Iban iban);
}
