package com.ivmalekl.bankingapp.model;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import com.github.javafaker.Faker;

@Entity
public class Account {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	private double balance;
	
	@OneToOne(cascade=CascadeType.ALL)
	private Iban iban;
	
	@OneToMany(cascade=CascadeType.ALL)
	private List<Transaction> transactions;
	
	private String accountType;
	
	
	
	private double exactlyTwoDecimals(double value) {
		BigDecimal bd = new BigDecimal(value);
		bd = bd.setScale(2, RoundingMode.HALF_UP);
		return bd.doubleValue();
	}
	
	public Account() {
		Faker faker = new Faker();
		this.balance = exactlyTwoDecimals(faker.number().randomDouble(2, -1000, 20000));
		this.iban = new Iban();
		this.transactions = new ArrayList<>();
		this.accountType = "Checking";
	}
	
	public Account(String accountType) {
		Faker faker = new Faker();
		this.balance = exactlyTwoDecimals(faker.number().randomDouble(2, -1000, 20000));
		this.iban = new Iban();
		this.transactions = new ArrayList<>();
		this.accountType = accountType;
	}
	
	
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public double getBalance() {
		return balance;
	}
	public void setBalance(double balance) {
		this.balance = balance;
	}
	
	public Iban getIban() {
		return iban;
	}
	public void setIban(Iban iban) {
		this.iban = iban;
	}
	
	
	public List<Transaction> getTransactions() {
		return transactions;
	}

	public void setTransactions(List<Transaction> transactions) {
		this.transactions = transactions;
	}

	
	public String getAccountType() {
		return accountType;
	}

	public void setAccountType(String accountType) {
		this.accountType = accountType;
	}

	@Override
	public String toString() {
		return "ID: " + id + "\n balance: " + balance + "\n iban: " + iban;
	}
	
	
	
	
}
