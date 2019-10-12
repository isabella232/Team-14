package com.paypalhack.backend.model;

public class Student{

    private int studentId;
	private String name;
    private String email;
    private String fafsaid;
	private String weeklyMealsNeeded;
    private String school;
    private int mealsLeft;
    private int mealsRedeemed;
    private String thankYouMsg;
    

    public Student(int studentId, String name, String email, String fafsaid, String weeklyMealsNeeded, String school, String thankYouMsg) {
        this.studentId = studentId;
        this.name = name;
        this.email = email;
        this.fafsaid = fafsaid;
        this.weeklyMealsNeeded = weeklyMealsNeeded;
        this.school = school;
        this.thankYouMsg = thankYouMsg;
    }

    public Student(String name, String school) {
        this.name = name;
        this.school = school;
    }

    public int getStudentId() {
        return this.studentId;
    }

    public void setStudentId(int studentId) {
        this.studentId = studentId;
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

    public String getFafsaid() {
        return this.fafsaid;
    }

    public void setFafsaid(String fafsaid) {
        this.fafsaid = fafsaid;
    }

    public String getWeeklyMealsNeeded() {
        return this.weeklyMealsNeeded;
    }

    public void setWeeklyMealsNeeded(String weeklyMealsNeeded) {
        this.weeklyMealsNeeded = weeklyMealsNeeded;
    }

    public String getSchool() {
        return this.school;
    }

    public void setSchool(String school) {
        this.school = school;
    }

    public int getMealsLeft() {
        return this.mealsLeft;
    }

    public void setMealsLeft(int mealsLeft) {
        this.mealsLeft = mealsLeft;
    }

    public int getMealsRedeemed() {
        return this.mealsRedeemed;
    }

    public void setMealsRedeemed(int mealsRedeemed) {
        this.mealsRedeemed = mealsRedeemed;
    }

    public String getThankYouMsg() {
        return this.thankYouMsg;
    }

    public void setThankYouMsg(String thankYouMsg) {
        this.thankYouMsg = thankYouMsg;
    }
	
}