package model;

public class VMCatagory {

	private String name;
	private int numOfCores;
	private int ram;
	private int gpuCores;
	
	public VMCatagory() {
		
	}
	
	
	
	public VMCatagory(String name, int numOfCores, int ram, int gpuCores) {
		super();
		this.name = name;
		this.numOfCores = numOfCores;
		this.ram = ram;
		this.gpuCores = gpuCores;
	}



	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
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
	
	
}
