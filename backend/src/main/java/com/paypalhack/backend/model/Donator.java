package com.paypalhack.backend.model;

public class Donator{
	private int donorId;
	private String name;
	private String email;
	private String paymentId;
	private boolean recurring;
	private String school;
	
	public Donator() {
		
	}

	public Donator(int donorId, String name, String email, String paymentId, boolean recurring, String school) {
		this.donorId = donorId;
		this.name = name;
		this.email = email;
		this.paymentId = paymentId;
		this.recurring = recurring;
		this.school = school;
	}


	public Donator(String name, String email, String school) {
		this.name = name;
		this.email = email;
		this.school = school;
	}
	
	public Donator(int donorId, String name, String email, String school) {
		this.donorId = donorId;
		this.name = name;
		this.email = email;
		this.school = school;
	}

	public int getDonorId() {
		return this.donorId;
	}

	public void setDonorId(int donorId) {
		this.donorId = donorId;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return this.email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPaymentId() {
		return this.paymentId;
	}

	public void setPaymentId(String paymentId) {
		this.paymentId = paymentId;
	}

	public boolean isRecurring() {
		return this.recurring;
	}

	public boolean getRecurring() {
		return this.recurring;
	}

	public void setRecurring(boolean recurring) {
		this.recurring = recurring;
	}

	public String getSchool() {
		return this.school;
	}

	public void setSchool(String school) {
		this.school = school;
	}

	
}