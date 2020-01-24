package repositories;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

import model.Organisation;

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
	
	
}
