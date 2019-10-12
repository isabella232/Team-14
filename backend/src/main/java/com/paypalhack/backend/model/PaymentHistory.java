package com.paypalhack.backend.model;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;


public class PaymentHistory{

    private int donorId;
    private int studentId;
    private String transactionDate;

    public PaymentHistory(int donorId, int studentId) {
        this.donorId = donorId;
        this.studentId = studentId;
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd");
        LocalDate localDate = LocalDate.now();
        this.transactionDate = dtf.format(localDate);
    }

    public int getDonorId() {
        return this.donorId;
    }

    public void setDonorId(int donorId) {
        this.donorId = donorId;
    }

    public int getStudentId() {
        return this.studentId;
    }

    public void setStudentId(int studentId) {
        this.studentId = studentId;
    }


}