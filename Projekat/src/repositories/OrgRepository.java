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

import model.Disk;
import model.Organisation;
import model.User;
import model.VM;

public class OrgRepository {

	private ArrayList<Organisation> orgs;

	public OrgRepository() {
		this.orgs = new ArrayList<Organisation>();
	}

	public ArrayList<Organisation> getAllOrgs(Gson g) throws IOException {
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

		for (Organisation org : this.orgs) {

			if (org.getName().equals(name)) {
				index = counter;
				// this.vms.remove(vm);
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

	public ArrayList<User> getUsersFromOrg(User user, Gson g) {
		try {
			this.getAllOrgs(g);
		} catch (IOException e) {
			return null;
		}
		for (Organisation org : this.orgs) {
			if (org.getName().equals(user.getOrganisation())) {
				return org.getUsers();
			}
		}
		return null;
	}

	public ArrayList<VM> getVMsFromOrg(User user, Gson g) {
		try {
			this.getAllOrgs(g);
		} catch (IOException e) {
			return null;
		}
		for (Organisation org : this.orgs) {
			if (org.getName().equals(user.getOrganisation())) {
				return org.getVms();
			}
		}
		return null;
	}

	public ArrayList<Disk> getDisksFromOrg(User user, Gson g) {
		try {
			this.getAllOrgs(g);
		} catch (IOException e) {
			return null;
		}
		for (Organisation org : this.orgs) {
			if (org.getName().equals(user.getOrganisation())) {
				return org.getDisks();
			}
		}
		return null;
	}

	public boolean updateOrg(Organisation newOrg, String oldName, Gson g) {
		try {
			this.getAllOrgs(g);
		} catch (IOException e) {
			return false;
		}
		int counter = 0;
		for (Organisation org : this.orgs) {
			if (org.getName().equals(oldName)) {
				break;
			}
			counter++;
		}

		try {
			this.orgs.remove(counter);
			this.orgs.add(newOrg);
			this.saveToFile(g);
			return true;

		} catch (Exception e) {

			return false;
		}
	}
	public boolean addUserToOrg(User user, String orgId, Gson g) {
		try {
			this.getAllOrgs(g);
		} catch (IOException e) {
			return false;
		}
		
		for(Organisation org : this.orgs) {
			if(org.getName().equals(orgId)) {
				if(org.getUsers() != null) {
					org.getUsers().add(user);
				}else {
					org.setUsers(new ArrayList<User>());
					org.getUsers().add(user);
				}
				
			}
		}
		
		try {
			this.saveToFile(g);
			return true;
		} catch (IOException e) {
			// TODO Auto-generated catch block
			return false;
		}
		
	
	}
}
