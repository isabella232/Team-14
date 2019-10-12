package com.paypalhack.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestBody;

import com.paypalhack.backend.model.Donator;
import com.paypalhack.backend.model.Student;

import com.paypalhack.backend.dao.DataAccessObject;


@RestController
public class AppController {
	
	@Autowired
	private DataAccessObject dao;

	@RequestMapping(value = "/hello", method = RequestMethod.GET)
	    public String returnValue()
	    {
	        return "Hello";
	    }
	
	@RequestMapping(value = "/donor", consumes ="application/json", method = RequestMethod.POST)
	public boolean createDonor(@RequestBody Donator donator){
		boolean status = dao.createDonor(donator);
		return status;
	}
	
	@RequestMapping(value = "/student", consumes ="application/json", method = RequestMethod.POST)
	public boolean createStudent(@RequestBody Student student){
		boolean status = dao.createStudent(student);
		return status;
	}
	
	@RequestMapping(value = "/student/mealsleft",consumes="application/json",method = RequestMethod.GET)
    public String returnMealsLeft(@RequestBody Student student)
    {
        String value = dao.getStudentMealsLeft(student);
        return value;
    }

	
	
}