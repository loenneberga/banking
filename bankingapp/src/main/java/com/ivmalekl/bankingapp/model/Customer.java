package com.ivmalekl.bankingapp.model;

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
public class Customer {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	private String firstName;
	private String lastName;
	private int age;
	private String password;
	
	
	@OneToOne(cascade=CascadeType.ALL)
	private Address address;
	
	@OneToMany(cascade=CascadeType.ALL)
	private List<Account> accountList;
	
	
	
	public Customer() {
		Faker faker = new Faker();
		this.firstName = faker.name().firstName();
		this.lastName = faker.name().lastName();
		this.accountList = new ArrayList<>();
		this.accountList.add(new Account());
		this.address = new Address();
		this.age = faker.number().numberBetween(18, 90);
		this.password = faker.internet().password(8, 9);
	}
	public Address getAddress() {
		return address;
	}
	public void setAddress(Address address) {
		this.address = address;
	}
	public List<Account> getAccountList() {
		return accountList;
	}
	public void setAccountList(List<Account> accountList) {
		this.accountList = accountList;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	
	
	
	
}
