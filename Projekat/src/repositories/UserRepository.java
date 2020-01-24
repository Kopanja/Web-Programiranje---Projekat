package repositories;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

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
		return users;
	}

	public ArrayList<User> getUsers() {
		return users;
	}

	public void setUsers(ArrayList<User> users) {
		this.users = users;
	}
	
	
}
