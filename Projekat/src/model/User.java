package model;

import enums.Role;

public class User {

	//unique
	
	private String email;
	private String password;
	private String firtName;
	private String LastName;
	private String organisation;
	private Role role;
	
	public User() {
		
	}
	
	
	
	public User(String email, String password, String firtName, String lastName, Role role) {
		super();
		this.email = email;
		this.password = password;
		this.firtName = firtName;
		LastName = lastName;
		this.role = role;
	}



	public User(String email, String password, String firtName, String lastName, String organisation, Role role) {
		super();
		this.email = email;
		this.password = password;
		this.firtName = firtName;
		LastName = lastName;
		this.organisation = organisation;
		this.role = role;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getFirtName() {
		return firtName;
	}

	public void setFirtName(String firtName) {
		this.firtName = firtName;
	}

	public String getLastName() {
		return LastName;
	}

	public void setLastName(String lastName) {
		LastName = lastName;
	}

	public String getOrganisation() {
		return organisation;
	}

	public void setOrganisation(String organisation) {
		this.organisation = organisation;
	}

	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}
	
	
	
	
}
