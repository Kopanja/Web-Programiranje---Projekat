package model;

import java.util.ArrayList;
import java.util.Date;

public class VM extends Resource {

	private VMCatagory catagory;
	private ArrayList<Disk> disks;
	private ArrayList<Date> activities;
	
	
	public VMCatagory getCatagory() {
		return catagory;
	}
	public void setCatagory(VMCatagory catagory) {
		this.catagory = catagory;
	}
	public ArrayList<Disk> getDisks() {
		return disks;
	}
	public void setDisks(ArrayList<Disk> disks) {
		this.disks = disks;
	}
	public ArrayList<Date> getActivities() {
		return activities;
	}
	public void setActivities(ArrayList<Date> activities) {
		this.activities = activities;
	}
	
	
	
	
}
