package model;

import java.util.ArrayList;



public class Organisation {
	
	private String name;
	private String description;
	private String logo;
	private ArrayList<String> users;
	private ArrayList<String> vms;
	private ArrayList<String> disks;
	
	public Organisation() {
		
	}

	
	
	public Organisation(String name, String description, String logo) {
		super();
		this.name = name;
		this.description = description;
		this.logo = logo;
	}



	public Organisation(String name, String description, String logo, ArrayList<String> users, ArrayList<String> vms,
			ArrayList<String> disks) {
		super();
		this.name = name;
		this.description = description;
		this.logo = logo;
		this.users = users;
		this.vms = vms;
		this.disks = disks;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getLogo() {
		return logo;
	}

	public void setLogo(String logo) {
		this.logo = logo;
	}

	public ArrayList<String> getUsers() {
		return users;
	}

	public void setUsers(ArrayList<String> users) {
		this.users = users;
	}

	public ArrayList<String> getVms() {
		return vms;
	}

	public void setVms(ArrayList<String> vms) {
		this.vms = vms;
	}

	public ArrayList<String> getDisks() {
		return disks;
	}

	public void setDisks(ArrayList<String> disks) {
		this.disks = disks;
	}
	
	

}
