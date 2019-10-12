package com.paypalhack.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestBody;

import com.paypalhack.backend.model.Donator;



@RestController
public class AppController {

	@RequestMapping(value = "/hello", method = RequestMethod.GET)
	    public String returnValue()
	    {
	        return "Hello";
	    }
	
	@RequestMapping(value = "/donor", consumes ="application/json",produces = "application/json", method = RequestMethod.POST)
	public boolean createDonor(@RequestBody Donator donator){
		System.out.println(donator.getName());
		return true;
	}
	
}