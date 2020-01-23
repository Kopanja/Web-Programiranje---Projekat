package rest;

import static spark.Spark.get;
import static spark.Spark.port;
import static spark.Spark.post;
import static spark.Spark.staticFiles;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

import enums.DiskType;
import enums.Role;
import model.Disk;
import model.Organisation;
import model.User;
import model.VM;
import model.VMCatagory;

public class SparkMain {

	private static Gson g = new Gson();
	private static ArrayList<User> users = new ArrayList<User>();
	
	public static void main(String[] args) throws IOException {

		
		port(8080);
		
		staticFiles.externalLocation(new File("./static").getCanonicalPath()); 
		
		get("/test", (req, res) -> {
			return "Works";
		});
		
		get("/user", (req,res) -> {
			res.type("application/json");
			return g.toJson(users);
		});
		
		post("/add", (req, res) -> {
			res.type("application/json");
			String payload = req.body();
			users = g.fromJson(payload, new TypeToken<ArrayList<User>>(){}.getType());
			return ("OK");
		});
	}
}


