package rest;

import static spark.Spark.get;
import static spark.Spark.put;
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
import java.util.ArrayList;

import com.google.gson.Gson;

import enums.DiskType;
import enums.Role;
import model.Disk;
import model.LoggInDTO;
import model.OrgEditDTO;
import model.Organisation;
import model.User;
import model.VM;
import model.VMCatagory;
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

	public static void main(String[] args) throws IOException {

		port(9003);

		staticFiles.externalLocation(new File("./static").getCanonicalPath());

		get("/test", (req, res) -> {
			System.out.println("test");

			return "Works";
		});

		post("/login", (req, res) -> {

			// res.type("application/json");

			userRepo.getAllUsers(g);
			LoggInDTO logInDto;
			String payload = req.body();
			logInDto = g.fromJson(payload, LoggInDTO.class);

			User logedInUser = userRepo.loggin(logInDto);

			Session ss = req.session(true);
			ss.attribute("user", logedInUser);

			if (ss.attribute("user") == null) {
				return "Status 400";
			}
			// return g.toJson(logedInUser);
			return "OK";
		});

		get("/users", (req, res) -> {
			res.type("application/json");
			return g.toJson(userRepo.getAllUsers(g));
		});

		get("/logOut", (req, res) -> {
			Session ss = req.session(true);
			ss.invalidate();
			return "OK";
		});

		get("/loginUser", (req, res) -> {
			res.type("application/json");

			User user = getLoginUser(req);

			return g.toJson(getLoginUser(req));
		});

		get("/orgs", (req, res) -> {
			res.type("application/json");
			return g.toJson(orgRepo.getAllOrgs(g));
		});

		get("/cats", (req, res) -> {
			res.type("application/json");
			return g.toJson(catRepo.getAllCategories(g));
		});

		get("/disks", (req, res) -> {
			res.type("application/json");
			return g.toJson(diskRepo.getAllDisks(g));
		});

		get("/vms", (req, res) -> {
			res.type("application/json");
			return g.toJson(vmRepo.getAllVMs(g));
		});
		put("/edit-profile", (req, res) -> {
			res.type("application/json");
			User logedInUser = getLoginUser(req);

			String payload = req.body();

			User user = g.fromJson(payload, User.class);

			boolean success = userRepo.updateProfile(logedInUser, user, g);
			if (success) {
				Session ss = req.session(true);
				ss.attribute("user", user);
				return "OK";
			} else {
				return "Status 400";
			}

		});

		put("/edit-user", (req, res) -> {
			res.type("application/json");
			String payload = req.body();

			User user = g.fromJson(payload, User.class);

			boolean success = userRepo.updateUser(user, g);
			if (success) {
				return "OK";
			} else {
				return "Status 400";
			}

		});
		
		put("/edit-org", (req, res) -> {
			res.type("application/json");
			String payload = req.body();

			OrgEditDTO orgDTO = g.fromJson(payload, OrgEditDTO.class);

			boolean success = orgRepo.updateOrg(orgDTO.getOrg(), orgDTO.getOldName(), g);
			boolean othersSuccess = true;
			if(orgDTO.isNameChanged()) {
				boolean userSuccess = userRepo.updateOrgNameInUsers(orgDTO.getOldName(), orgDTO.getOrg().getName(), g);
				boolean vmsSuccess = vmRepo.updateOrgNameInVMs(orgDTO.getOldName(), orgDTO.getOrg().getName(), g);
				boolean diskSuccess = diskRepo.updateOrgNameInDisks(orgDTO.getOldName(), orgDTO.getOrg().getName(), g);
				othersSuccess = userSuccess && vmsSuccess && diskSuccess;
			}
			
			if (success && othersSuccess) {
				return "OK";
			} else {
				return "Status 400";
			}

		});

		post("/vms/add", (req, res) -> {
			res.type("application/json");
			VM newVm;
			String payload = req.body();
			newVm = g.fromJson(payload, VM.class);

			vmRepo.getVms().add(newVm);
			orgRepo.addVMToOrg(newVm,newVm.getOrganisation(), g);
			vmRepo.saveToFile(g);
			return ("OK");
		});

		post("/users/add", (req, res) -> {
			res.type("application/json");
			User user;
			String payload = req.body();
			user = g.fromJson(payload, User.class);
			userRepo.getUsers().add(user);
			orgRepo.addUserToOrg(user, user.getOrganisation(), g);
			userRepo.saveToFile(g);
			return ("OK");
		});

		post("/orgs/add", (req, res) -> {
			res.type("application/json");
			Organisation org;
			String payload = req.body();
			org = g.fromJson(payload, Organisation.class);
			orgRepo.getOrgs().add(org);
			orgRepo.saveToFile(g);
			return ("OK");
		});

		post("/findDisksById", (req, res) -> {

			res.type("application/json");
			ArrayList<String> diskIds;
			String payload = req.body();

			diskIds = g.fromJson(payload, ArrayList.class);

			ArrayList<Disk> disks = diskRepo.getDisksById(g, diskIds);
			return g.toJson(disks);
		});
		
		post("/findOrgById", (req, res) -> {

			res.type("application/json");
			
			String payload = req.body();

			String orgIds = g.fromJson(payload, String.class);

			Organisation org = orgRepo.findOrgById(orgIds, g);
			return g.toJson(org);
		});
		
		post("/findVMById", (req, res) -> {

			res.type("application/json");
			String vmId;
			String payload = req.body();
			vmId = g.fromJson(payload, String.class);

			VM vm = vmRepo.findVMById(vmId,g);
			return g.toJson(vm);
		});
		
		post("/findCatById", (req, res) -> {

			res.type("application/json");
			String catId;
			String payload = req.body();
			catId = g.fromJson(payload, String.class);

			VMCatagory cat = catRepo.findCatById(catId,g);
			return g.toJson(cat);
		});

		get("/usersFromOrg", (req, res) -> {

			res.type("application/json");
			Session ss = req.session(true);
			User user = ss.attribute("user");
			ArrayList<User> users = orgRepo.getUsersFromOrg(user, g);
			return g.toJson(users);
		});
		

		get("/vmsFromOrg", (req, res) -> {

			res.type("application/json");
			Session ss = req.session(true);
			User user = ss.attribute("user");
			ArrayList<VM> vms = orgRepo.getVMsFromOrg(user, g);
			return g.toJson(vms);
		});

		get("/disksFromOrg", (req, res) -> {

			res.type("application/json");
			Session ss = req.session(true);
			User user = ss.attribute("user");
			ArrayList<Disk> disks = orgRepo.getDisksFromOrg(user, g);
			return g.toJson(disks);
		});

		delete("/vms/delete/:name", (req, res) -> {
			String name = req.params("name");
			vmRepo.deleteVm(name);
			vmRepo.saveToFile(g);
			orgRepo.deleteVMFromOrg(name);
			orgRepo.saveToFile(g);
			return ("OK");
		});
		delete("/orgs/delete/:name", (req, res) -> {
			String name = req.params("name");

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
