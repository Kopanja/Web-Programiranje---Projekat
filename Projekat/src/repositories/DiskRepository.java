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

public class DiskRepository {

private ArrayList<Disk> disks;
	
	public DiskRepository() {
		this.disks = new ArrayList<Disk>();
	}
	
	public ArrayList<Disk> getAllDisks(Gson g) throws IOException{
		File file = new File(".\\data\\disks.txt");

		BufferedReader br = new BufferedReader(new FileReader(file));

		String stringData = br.readLine();
		disks = g.fromJson(stringData, new TypeToken<ArrayList<Disk>>() {
		}.getType());
		return disks;
	}
	
	public ArrayList<Disk> getDisksById(Gson g, ArrayList<String> diskIds) throws IOException{
		File file = new File(".\\data\\disks.txt");
		BufferedReader br = new BufferedReader(new FileReader(file));
		
		ArrayList<Disk> foundDisks = new ArrayList<Disk>();
		
		String stringData = br.readLine();
		disks = g.fromJson(stringData, new TypeToken<ArrayList<Disk>>() {
		}.getType());
		
		for(Disk disk : disks) {
			for(String diskId : diskIds) {
				if(disk.getName().equals(diskId)) {
					foundDisks.add(disk);
				}
			}
		}
		return foundDisks;
	}

	public ArrayList<Disk> getDisks() {
		return disks;
	}

	public void setDisks(ArrayList<Disk> disks) {
		this.disks = disks;
	}
	public void saveToFile(Gson g) throws IOException {
	    BufferedWriter writer = new BufferedWriter(new FileWriter(".\\data\\disks.txt"));
	    writer.write(g.toJson(this.disks));
	     
	    writer.close();
	}
	
	
}
