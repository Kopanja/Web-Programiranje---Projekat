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

import model.LoggInDTO;
import model.Organisation;
import model.User;
import model.VM;
import repositories.DiskRepository;
import repositories.OrgRepository;
import repositories.UserRepository;
import repositories.VMCategoryRepository;
import repositories.VMRepository;
import spark.Filter;
import spark.Request;
import spark.Session;

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
		
		
		post("/login", (req, res) -> {
			
			//res.type("application/json");
			
			userRepo.getAllUsers(g);
			LoggInDTO logInDto;
			String payload = req.body();
			System.out.println(payload);
			logInDto = g.fromJson(payload, LoggInDTO.class);
			System.out.println(logInDto.getUsername());
			User logedInUser = userRepo.loggin(logInDto);
			
			Session ss = req.session(true);
			ss.attribute("user", logedInUser);	
			
			if(ss.attribute("user")==null) {
				return "Status 400";
			}
			//return g.toJson(logedInUser);
			return "OK";
			});
		
		get("/users", (req,res) -> {
			res.type("application/json");
			return g.toJson(userRepo.getAllUsers(g));
		});
		
		get("/logOut", (req,res) -> {
			Session ss = req.session(true);
			ss.invalidate();
			return "OK";
		});
		
		get("/loginUser", (req,res) -> {
			res.type("application/json");
			System.out.println("Trazim ulogovanog usera");
			User user = getLoginUser(req);
			System.out.println(user.getEmail());
			return g.toJson(getLoginUser(req));
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
			res.type("application/json");
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
	
	private static User getLoginUser(Request req) {
		Session ss = req.session(true);
		User user = ss.attribute("user"); 
		if (user == null) {
			System.out.println("User is not logged in");
		}
		return user;
	}
	

}


