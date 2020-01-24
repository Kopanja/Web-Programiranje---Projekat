package rest;

import static spark.Spark.get;
import static spark.Spark.port;
import static spark.Spark.post;
import static spark.Spark.staticFiles;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileOutputStream;
import java.io.FileWriter;
import java.io.IOException;

import com.google.gson.Gson;

import model.Organisation;
import repositories.DiskRepository;
import repositories.OrgRepository;
import repositories.UserRepository;
import repositories.VMCategoryRepository;
import repositories.VMRepository;

public class SparkMain {

	private static Gson g = new Gson();
	
	private static UserRepository userRepo = new UserRepository();
	private static OrgRepository orgRepo = new OrgRepository();
	private static VMRepository vmRepo = new VMRepository();
	private static VMCategoryRepository catRepo = new VMCategoryRepository();
	private static DiskRepository diskRepo = new DiskRepository();
	
	private static Organisation org1 = new Organisation("ORG-1", "Jako lepa organizacija", "");
	private static Organisation org2 = new Organisation("ORG-2", "Jos lepsa organizacija", "");
	private static Organisation org3 = new Organisation("ORG-3", "Najlepsa organizacija", "");
	
	public static void main(String[] args) throws IOException {

		
		port(8080);
		
		
		staticFiles.externalLocation(new File("./static").getCanonicalPath()); 
		
		get("/test", (req, res) -> {
			return "Works";
		});
		
		get("/users", (req,res) -> {
			res.type("application/json");
			return g.toJson(userRepo.getAllUsers(g));
		});
		
		get("/orgs", (req,res) -> {
			res.type("application/json");
			return g.toJson(orgRepo.getAllOrgs(g));
		});
		
		get("/vms", (req,res) -> {
			res.type("application/json");
			return g.toJson(vmRepo.getAllVMs(g));
		});
		
		get("/cats", (req,res) -> {
			res.type("application/json");
			return g.toJson(catRepo.getAllCategories(g));
		});
		
		get("/disks", (req,res) -> {
			res.type("application/json");
			return g.toJson(diskRepo.getAllDisks(g));
		});
		
		post("/add", (req, res) -> {
			res.type("application/json");
			String payload = req.body();
			//users = g.fromJson(payload, new TypeToken<ArrayList<User>>(){}.getType());
			return ("OK");
		});
	}
	

}


