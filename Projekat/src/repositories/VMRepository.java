package repositories;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

import model.VM;

public class VMRepository {

	private ArrayList<VM> vms;
	
	public VMRepository() {
		vms = new ArrayList<VM>();
	}
	
	public ArrayList<VM> getAllVMs(Gson g) throws IOException{
		File file = new File(".\\data\\vms.txt");

		BufferedReader br = new BufferedReader(new FileReader(file));

		String stringData = br.readLine();
		vms = g.fromJson(stringData, new TypeToken<ArrayList<VM>>() {
		}.getType());
		
		return vms;
	}

	public ArrayList<VM> getVms() {
		return vms;
	}

	public void setVms(ArrayList<VM> vms) {
		this.vms = vms;
	}
	
	public void deleteVm(String name) {
		System.out.println(name);
		int counter = 0;
		int index = 0;
		
		for(VM vm : this.vms) {
			if(vm.getName() == name) {
				index = counter;
				this.vms.remove(vm);
			}
			counter++;
		}
		this.vms.remove(index);
		System.out.println("promena");
	}
	
	public void saveToFile(Gson g) throws IOException {
	    BufferedWriter writer = new BufferedWriter(new FileWriter(".\\data\\vms.txt"));
	    writer.write(g.toJson(this.vms));
	     
	    writer.close();
	}
	
	
}
