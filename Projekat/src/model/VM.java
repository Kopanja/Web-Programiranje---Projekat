package model;

import java.util.ArrayList;
import java.util.Date;

public class VM {

	private String name;
	private String catagory;
	private int numOfCores;
	private int ram;
	private int gpuCores;
	private ArrayList<String> disks;
	private ArrayList<VMActivity> activities;
	
	public VM() {
		
	}

	
	public VM(String name, String catagory, int numOfCores, int ram, int gpuCores) {
		super();
		this.name = name;
		this.catagory = catagory;
		this.numOfCores = numOfCores;
		this.ram = ram;
		this.gpuCores = gpuCores;
	}


	public VM(String name, String catagory, int numOfCores, int ram, int gpuCores, ArrayList<String> disks) {
		super();
		this.name = name;
		this.catagory = catagory;
		this.numOfCores = numOfCores;
		this.ram = ram;
		this.gpuCores = gpuCores;
		this.disks = disks;
	}

	public VM(String name, String catagory, int numOfCores, int ram, int gpuCores, ArrayList<String> disks,
			ArrayList<VMActivity> activities) {
		super();
		this.name = name;
		this.catagory = catagory;
		this.numOfCores = numOfCores;
		this.ram = ram;
		this.gpuCores = gpuCores;
		this.disks = disks;
		this.activities = activities;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCatagory() {
		return catagory;
	}

	public void setCatagory(String catagory) {
		this.catagory = catagory;
	}

	public int getNumOfCores() {
		return numOfCores;
	}

	public void setNumOfCores(int numOfCores) {
		this.numOfCores = numOfCores;
	}

	public int getRam() {
		return ram;
	}

	public void setRam(int ram) {
		this.ram = ram;
	}

	public int getGpuCores() {
		return gpuCores;
	}

	public void setGpuCores(int gpuCores) {
		this.gpuCores = gpuCores;
	}

	public ArrayList<String> getDisks() {
		return disks;
	}

	public void setDisks(ArrayList<String> disks) {
		this.disks = disks;
	}

	public ArrayList<VMActivity> getActivities() {
		return activities;
	}

	public void setActivities(ArrayList<VMActivity> activities) {
		this.activities = activities;
	}

	
	
	
	
	
	
}
