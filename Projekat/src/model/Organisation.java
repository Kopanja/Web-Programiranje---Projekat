package model;

import java.util.ArrayList;



public class Organisation {
	
	private String name;
	private String description;
	private String logo;
	private ArrayList<User> users;
	private ArrayList<VM> vms;
	private ArrayList<Disk> disks;
	
	public Organisation() {
		
	}

	
	
	public Organisation(String name, String description, String logo) {
		super();
		this.name = name;
		this.description = description;
		this.logo = logo;
	}



	public Organisation(String name, String description, String logo, ArrayList<User> users, ArrayList<VM> vms,
			ArrayList<Disk> disks) {
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

	public ArrayList<User> getUsers() {
		return users;
	}

	public void setUsers(ArrayList<User> users) {
		this.users = users;
	}

	public ArrayList<VM> getVms() {
		return vms;
	}

	public void setVms(ArrayList<VM> vms) {
		this.vms = vms;
	}

	public ArrayList<Disk> getDisks() {
		return disks;
	}

	public void setDisks(ArrayList<Disk> disks) {
		this.disks = disks;
	}
	
	

}
