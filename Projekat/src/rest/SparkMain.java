package rest;

import static spark.Spark.get;
import static spark.Spark.port;
import static spark.Spark.staticFiles;

import java.io.File;
import java.io.IOException;

import com.google.gson.Gson;

public class SparkMain {

	private static Gson g = new Gson();
	public static void main(String[] args) throws IOException {

		port(8080);
		
		staticFiles.externalLocation(new File("./static").getCanonicalPath()); 
		
		get("/test", (req, res) -> {
			return "Works";
		});
		
	}
}


