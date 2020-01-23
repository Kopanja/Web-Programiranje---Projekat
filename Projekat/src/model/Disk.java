package model;

import enums.DiskType;

public class Disk extends Resource {

	private DiskType type;
	private int capacity;
	private VM vm;
	
	
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
	public VM getVm() {
		return vm;
	}
	public void setVm(VM vm) {
		this.vm = vm;
	}
	
	
}
