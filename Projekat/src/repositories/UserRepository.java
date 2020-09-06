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

import model.LoggInDTO;
import model.User;

public class UserRepository {

	private ArrayList<User> users;

	public UserRepository() {
		users = new ArrayList<User>();
	}

	public ArrayList<User> getAllUsers(Gson g) throws IOException {
		File file = new File(".\\data\\users.txt");

		BufferedReader br = new BufferedReader(new FileReader(file));

		String stringData = br.readLine();

		users = g.fromJson(stringData, new TypeToken<ArrayList<User>>() {
		}.getType());
		this.users = users;
		return users;
	}

	public ArrayList<User> getUsers() {
		return users;
	}

	public void setUsers(ArrayList<User> users) {
		this.users = users;
	}
	
	public void saveToFile(Gson g) throws IOException {
	    BufferedWriter writer = new BufferedWriter(new FileWriter(".\\data\\users.txt"));
	    writer.write(g.toJson(this.users));
	     
	    writer.close();
	}
	
	public User loggin(LoggInDTO logginInfo) {
		User loggedInUser = null;
		for(User user : this.users) {
			if(user.getEmail().equals(logginInfo.getUsername()) && user.getPassword().equals(logginInfo.getPassword())) {
				loggedInUser = user;
				
			}
		}
		
		return loggedInUser;
	}
	
}
