package com.paypalhack.backend.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.PreparedStatement;
import java.sql.Statement;
import java.sql.ResultSet;

import org.springframework.context.annotation.PropertySource;
import org.springframework.context.annotation.Configuration;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.beans.factory.annotation.Autowired;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.paypalhack.backend.model.Donator;
import com.paypalhack.backend.model.Student;


@Configuration
@PropertySource("classpath:application.properties")
public class DataAccessObject {
	
	@Value( "${spring.datasource.url}" )
	private String url;
	
	@Value( "${spring.datasource.username}" )
	private String user;
	
	@Value( "${spring.datasource.password}" )
	private String password;
	
	public Connection createConnection() {
        Connection conn = null;
        try {
            conn = DriverManager.getConnection(url, user, password);
            System.out.println("Connected to the PostgreSQL server successfully.");
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
        return conn;
    }
	
	public boolean createDonor(Donator donor) {
		try {
		Connection conn = createConnection();
		String createDonorSql = "INSERT INTO public.donor(name, email, college) VALUES (?, ?, ?);";
		PreparedStatement pstmt = conn.prepareStatement(createDonorSql);
		pstmt.setString(1, donor.getName());
		pstmt.setString(2, donor.getEmail());
		pstmt.setString(3, donor.getSchool());
		int i=pstmt.executeUpdate();
		if (i <= 0) throw new SQLException("Donor addition failed!");
		} catch (SQLException e){
			return false;
		}
		return true;
	}
	
	public boolean createStudent(Student student) {
		try {
		Connection conn = createConnection();
		String createStudentSql = "INSERT INTO public.student(name, email, school, fafsaid, city, weeklymealsneeded,thankyoumsg) VALUES (?, ?, ?, ?, ?, ?, ?);";
		PreparedStatement pstmt = conn.prepareStatement(createStudentSql);
		pstmt.setString(1, student.getName());
		pstmt.setString(2, student.getEmail());
		pstmt.setString(3, student.getSchool());
		pstmt.setString(4, student.getFafsaid());
		pstmt.setString(5, student.getCity());
		pstmt.setInt(6, student.getWeeklyMealsNeeded());
		pstmt.setString(7, student.getThankYouMsg());
		int i=pstmt.executeUpdate();
		if (i <= 0) throw new SQLException("Donor addition failed!");
		} catch (SQLException e){
			return false;
		}
		return true;
	}
	
	public String getStudentMealsLeft(Student student) {
		int mealsLeft,mealsredeemed;
		String jsonString = null;
		try {
			ObjectMapper mapper = new ObjectMapper();
			JsonNode rootNode = mapper.createObjectNode();
			JsonNode childNode1 = mapper.createObjectNode();
			Connection conn = createConnection();
			String getMealsSQL = "SELECT mealsleft, mealsredeemed FROM public.student where id = ?;";
			PreparedStatement st = conn.prepareStatement(getMealsSQL);
			st.setInt(1, student.getStudentId());
	        ResultSet rs = st.executeQuery(getMealsSQL);
		    if (rs.next()) {
		        mealsLeft = rs.getInt(1);
		        mealsredeemed = rs.getInt(2);
		        ((ObjectNode) childNode1).put("mealsLeft", mealsLeft);
				((ObjectNode) childNode1).put("mealsredeemed", mealsredeemed);
				}
		    jsonString = mapper.writerWithDefaultPrettyPrinter().writeValueAsString(rootNode);
		    return jsonString;
			} catch(SQLException e) {
				e.printStackTrace();
			}catch (JsonProcessingException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		return jsonString;
	}

}
