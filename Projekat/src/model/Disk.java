package model;

import enums.DiskType;

public class Disk {

	private String name;
	private DiskType type;
	private int capacity;
	private String organisation;
	private String vm;
	
	
	public Disk() {
		
	}


	
	
	public Disk(String name, DiskType type, int capacity) {
		super();
		this.name = name;
		this.type = type;
		this.capacity = capacity;
		
	}




	public Disk(String name, DiskType type, int capacity, String vm, String org) {
		super();
		this.name = name;
		this.type = type;
		this.capacity = capacity;
		this.vm = vm;
		this.organisation = org;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public DiskType getType() {
		return type;
	}


	public void setType(DiskType type) {
		this.type = type;
	}


	public int getCapacity() {
		return capacity;
	}


	public void setCapacity(int capacity) {
		this.capacity = capacity;
	}


	public String getVm() {
		return vm;
	}


	public void setVm(String vm) {
		this.vm = vm;
	}
	
	
	
	
}
