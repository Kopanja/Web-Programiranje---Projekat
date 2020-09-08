package repositories;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

import model.VM;
import model.VMCatagory;


public class VMCategoryRepository {

	private ArrayList<VMCatagory> categories;
	public VMCategoryRepository() {
		this.categories = new ArrayList<VMCatagory>();
	}
	
	public ArrayList<VMCatagory> getAllCategories(Gson g) throws IOException{
		File file = new File(".\\data\\categories.txt");

		BufferedReader br = new BufferedReader(new FileReader(file));

		String stringData = br.readLine();
		categories = g.fromJson(stringData, new TypeToken<ArrayList<VMCatagory>>() {
		}.getType());
		return categories;
	}

	public ArrayList<VMCatagory> getCategories() {
		return categories;
	}

	public void setCategories(ArrayList<VMCatagory> categories) {
		this.categories = categories;
	}
	
	public VMCatagory findCatById(String id, Gson g) {
		try {
			this.getAllCategories(g);
		} catch (IOException e) {
			return null;
		}
		for(VMCatagory cat: this.categories) {
			if(cat.getName().equals(id)) {
				return cat;
			}
		}
		return null;
	}
	
	
}
