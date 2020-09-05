package rest;

import static spark.Spark.get;
import static spark.Spark.delete;
import static spark.Spark.port;
import static spark.Spark.post;
import static spark.Spark.after;

import static spark.Spark.staticFiles;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileOutputStream;
import java.io.FileWriter;
import java.io.IOException;

import com.google.gson.Gson;

import model.Organisation;
import model.User;
import model.VM;
import repositories.DiskRepository;
import repositories.OrgRepository;
import repositories.UserRepository;
import repositories.VMCategoryRepository;
import repositories.VMRepository;
import spark.Filter;

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
		
		port(9003);
		
		
		staticFiles.externalLocation(new File("./static").getCanonicalPath()); 
		
	
		
		get("/test", (req, res) -> {
			System.out.println("test");
			
			return "Works";
		});
		
		post("/post", (req, res) -> {
			//res.type("application/json");
			System.out.println("asasas");
			//System.out.println("aaaaaaaaaaaaaa");
			String payload = req.body();
			System.out.println(payload);
			return "OK";
		});
		
		get("/users", (req,res) -> {
			res.type("application/json");
			return g.toJson(userRepo.getAllUsers(g));
		});
		
		get("/orgs", (req,res) -> {
			res.type("application/json");
			return g.toJson(orgRepo.getAllOrgs(g));
		});
		
		
		
		get("/cats", (req,res) -> {
			res.type("application/json");
			return g.toJson(catRepo.getAllCategories(g));
		});
		
		get("/disks", (req,res) -> {
			res.type("application/json");
			return g.toJson(diskRepo.getAllDisks(g));
		});
		
		
			
	
		
		get("/vms", (req,res) -> {
			System.out.println("AAAAAAAAAAAAAAAaa");
			res.type("application/json");
			for(VM vm : vmRepo.getAllVMs(g)) {
				System.out.println(vm.getName());
			}
			System.out.println(g.toJson(vmRepo.getAllVMs(g)));
			return g.toJson(vmRepo.getAllVMs(g));
		});
		
		
		post("/vms/add", (req, res) -> {
			res.type("application/json");
			VM newVm;
			String payload = req.body();
			newVm = g.fromJson(payload, VM.class);
			System.out.println(payload);
			System.out.println(newVm.getName());
			vmRepo.getVms().add(newVm);
			vmRepo.saveToFile(g);
			return ("OK");
		});
		
		post("/users/add", (req, res) -> {
			res.type("application/json");
			User user;
			String payload = req.body();
			user = g.fromJson(payload, User.class);
			System.out.println(payload);
			System.out.println(user.getEmail());
			userRepo.getUsers().add(user);
			userRepo.saveToFile(g);
			return ("OK");
		});
		
		post("/orgs/add", (req, res) -> {
			res.type("application/json");
			Organisation org;
			String payload = req.body();
			org = g.fromJson(payload, Organisation.class);
			System.out.println(payload);
			System.out.println(org.getName());
			orgRepo.getOrgs().add(org);
			orgRepo.saveToFile(g);
			return ("OK");
		});
		
		delete("/vms/delete/:name", (req, res) -> {
			String name = req.params("name");
			System.out.println("NAMEEE" + name);
			vmRepo.deleteVm(name);
			vmRepo.saveToFile(g);
			return ("OK");
		});
		delete("/orgs/delete/:name", (req, res) -> {
			String name = req.params("name");
			System.out.println("NAMEEE" + name);
			orgRepo.deleteOrg(name);
			orgRepo.saveToFile(g);
			return ("OK");
		});
	
	}
	

}


