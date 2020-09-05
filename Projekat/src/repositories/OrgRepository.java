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

import model.Organisation;
import model.VM;

public class OrgRepository {

	private ArrayList<Organisation> orgs;
	
	public OrgRepository() {
		this.orgs = new ArrayList<Organisation>();
	}
	
	public ArrayList<Organisation> getAllOrgs(Gson g) throws IOException{
		File file = new File(".\\data\\organisations.txt");

		BufferedReader br = new BufferedReader(new FileReader(file));

		String stringData = br.readLine();
		orgs = g.fromJson(stringData, new TypeToken<ArrayList<Organisation>>() {
		}.getType());
		return orgs;
	}

	public ArrayList<Organisation> getOrgs() {
		return orgs;
	}

	public void setOrgs(ArrayList<Organisation> orgs) {
		this.orgs = orgs;
	}
	
	public void deleteOrg(String name) {
		System.out.println(name);
		int counter = 0;
		int index = 0;
		
		for(Organisation org : this.orgs) {
			
			if(org.getName().equals(name)) {
				index = counter;
				//this.vms.remove(vm);
			}
			counter++;
		}
		this.orgs.remove(index);
		System.out.println("promena");
	}
	
	public void saveToFile(Gson g) throws IOException {
	    BufferedWriter writer = new BufferedWriter(new FileWriter(".\\data\\organisations.txt"));
	    writer.write(g.toJson(this.orgs));
	     
	    writer.close();
	}
	
}
