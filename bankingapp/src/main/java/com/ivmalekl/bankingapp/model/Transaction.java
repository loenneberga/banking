package com.ivmalekl.bankingapp.model;

import java.util.Date;
import java.util.Optional;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
@Entity
public class Transaction {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	private String payer;
	private String payee;
	private String payerIban;
	private String payeeIban;
	private Date date;
	private double amount;
	
	
	
	public Transaction() {
		this.date = new Date();
		
	}



	public Long getId() {
		return id;
	}



	public void setId(Long id) {
		this.id = id;
	}



	public String getPayer() {
		return payer;
	}



	public void setPayer(String payer) {
		this.payer = payer;
	}



	public String getPayee() {
		return payee;
	}



	public void setPayee(String payee) {
		this.payee = payee;
	}



	public Date getDate() {
		return date;
	}



	public void setDate(Date date) {
		this.date = date;
	}



	public double getAmount() {
		return amount;
	}



	public void setAmount(double amount) {
		this.amount = amount;
	}



	public String getPayerIban() {
		return payerIban;
	}



	public void setPayerIban(String payerIban) {
		this.payerIban = payerIban;
	}



	public String getPayeeIban() {
		return payeeIban;
	}



	public void setPayeeIban(String payeeIban) {
		this.payeeIban = payeeIban;
	}

	

	
	
	
}
