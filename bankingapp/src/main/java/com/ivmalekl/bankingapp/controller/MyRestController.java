package com.ivmalekl.bankingapp.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ivmalekl.bankingapp.model.Account;
import com.ivmalekl.bankingapp.model.Customer;
import com.ivmalekl.bankingapp.model.Iban;
import com.ivmalekl.bankingapp.model.Transaction;
import com.ivmalekl.bankingapp.repositories.AccountRepository;
import com.ivmalekl.bankingapp.repositories.CustomerRepository;
import com.ivmalekl.bankingapp.repositories.IbanRepository;

import requestobjects.UpdateAccountRQ;

@RestController
public class MyRestController {
	
	@Autowired
	CustomerRepository custRepo;
	@Autowired
	AccountRepository accRepo;
	@Autowired
	IbanRepository ibanRepo;
	@CrossOrigin(origins = "*", allowedHeaders="*")
	@GetMapping(value = "/accounts")
	public ResponseEntity<?> getAllAccounts() {
		List<Account> allAccounts = accRepo.findAll();
		return new ResponseEntity<>(allAccounts, HttpStatus.OK);
	}
	
	@CrossOrigin(origins = "*", allowedHeaders="*")
	@PostMapping(value = "/account", consumes = "application/json")
	public ResponseEntity<Account> postAccount(@RequestBody Account receivedAccount) {
		accRepo.save(receivedAccount);
		return new ResponseEntity<Account>(receivedAccount, HttpStatus.CREATED);
	}
	
	@CrossOrigin(origins = "*", allowedHeaders="*")
	@PostMapping(value = "/customer", consumes = "application/json")
	public ResponseEntity<Customer> postCustomer(@RequestBody Customer receivedCustomer) {
		custRepo.save(receivedCustomer);
		return new ResponseEntity<Customer>(receivedCustomer, HttpStatus.CREATED);
	}
	
	@CrossOrigin(origins = "*", allowedHeaders="*")
	@GetMapping(value = "/customers")
	public ResponseEntity<List<Customer>> getAllCustomers() {
		List<Customer> allCustomers = custRepo.findAll();
		return new ResponseEntity<List<Customer>>(allCustomers, HttpStatus.OK);
	}
	
	@CrossOrigin(origins = "*", allowedHeaders="*")
	@PutMapping(path="/update")
	public ResponseEntity<List<Account>> updateAccount(@RequestBody UpdateAccountRQ request) {
		Optional<Iban> ibanSender = ibanRepo.findByValue(request.iban);
		Optional<Iban> ibanReceiver = ibanRepo.findByValue(request.iban2);
		
		//find both accounts
		Optional<Account> accountSender = accRepo.findByIban(ibanSender.get());
		Optional<Account> accountReceiver = accRepo.findByIban(ibanReceiver.get());
		//find customers
		Customer sender = custRepo.findByAccountListContaining(accountSender);
		Customer receiver = custRepo.findByAccountListContaining(accountReceiver);
		
		//deduct money from 1st account
		accountSender.get().setBalance(accountSender.get().getBalance()-Math.abs(request.amount));
		//add money to second account
		accountReceiver.get().setBalance(accountReceiver.get().getBalance()+Math.abs(request.amount));
		
		Transaction transaction = new Transaction();
		transaction.setAmount(request.amount);
		transaction.setPayer(sender.getFirstName()+" "+sender.getLastName());
		transaction.setPayee(receiver.getFirstName()+" "+receiver.getLastName());
		transaction.setPayerIban(request.iban);
		transaction.setPayeeIban(request.iban2);
		
		
		accountSender.get().getTransactions().add(transaction);
		accountReceiver.get().getTransactions().add(transaction);
		accRepo.save(accountSender.get());
		accRepo.save(accountReceiver.get());
		
		List<Account> allCustomers = new ArrayList<Account>();
		
	    return new ResponseEntity<List<Account>>(allCustomers, HttpStatus.OK);
	}
	
	@CrossOrigin(origins = "*", allowedHeaders="*")
	@GetMapping(path="/customer/{id}")
	public ResponseEntity<Customer> getCustomer(@PathVariable Long id) {
	Customer customer1 = custRepo.findById(id).get();
	return new ResponseEntity<Customer>(customer1, HttpStatus.OK);
	}
	
	@CrossOrigin(origins="*", allowedHeaders="*")
	@PostMapping(path="addAccountFor/{id}/{accountType}")
	public ResponseEntity<Customer> addAccount(@PathVariable Long id, @PathVariable String accountType) {
		Customer customer = custRepo.findById(id).get();
		customer.getAccountList().add(new Account(accountType));
		custRepo.save(customer);
		return new ResponseEntity<Customer>(customer, HttpStatus.OK);
	}
	
	@CrossOrigin(origins = "*", allowedHeaders="*")
	@GetMapping(path="/account/{value}")
	public ResponseEntity<Account> getAccount(@PathVariable String value) {
		Iban iban = ibanRepo.findByValue(value).get();
		Account account = accRepo.findByIban(iban).get();
		return new ResponseEntity<Account>(account, HttpStatus.OK);
		
	}
	
	
}
