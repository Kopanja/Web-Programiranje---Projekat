package repositories;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
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
	
	
}
